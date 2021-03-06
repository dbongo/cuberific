/*
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
package main

import (
	"code.google.com/p/gorest"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"labix.org/v2/mgo"
	"labix.org/v2/mgo/bson"
	"log"
	"net/http"
	"strings"
	"time"
)

var (
	mgoSession *mgo.Session
)

func getSession() *mgo.Session {
	if mgoSession == nil {
		var err error
		mgoSession, err = mgo.Dial("localhost")
		if err != nil {
			panic(err) // no, not really
		}
	}
	return mgoSession.Clone()
}

func main() {
	gorest.RegisterService(new(CubeService))
	http.Handle("/", gorest.Handle())
	http.ListenAndServe(":9090", nil)

}

//************************Define Service***************************

type CubeService struct {
	//Service level config
	gorest.RestService `root:"/api/" consumes:"application/json" produces:"application/json"`
	/* SOLVE ENDPOINTS */
	getSolves     gorest.EndPoint `method:"GET" path:"/solves" output:"[]Solves"`
	addSolve      gorest.EndPoint `method:"POST" path:"/solves" postdata:"Solves"`
	getUserSolves gorest.EndPoint `method:"GET" path:"/solves/{CubeType:int}/{userSession:int}/{UserId:string}" output:"[]Solves"`
	deleteSolve   gorest.EndPoint `method:"DELETE" path:"/solves/{solveId:string}"`
	alterSolve    gorest.EndPoint `method:"GET" path:"/solves/alter/{Action:string}/{Status:bool}/{userId:string}/{SolveId:string}" output:"string"`
	getStats      gorest.EndPoint `method:"GET" path:"/solves/stats/{CubeType:int}/{userSession:int}/{UserId:string}" output:"Stats"`

	/* USERS ENDPOINTS */
	getUsers  gorest.EndPoint `method:"GET" path:"/users" output:"[]User"`
	addUser   gorest.EndPoint `method:"POST" path:"/users" postdata:"User"`
	loginUser gorest.EndPoint `method:"POST" path:"/users/login" postdata:"Login"`
	//addItem     gorest.EndPoint `method:"POST" path:"/items/" postdata:"Item"`

	/* session info */
	getProfile    gorest.EndPoint `method:"GET" path:"/profile/{UserId:string}" output:"Profile"`
	updateProfile gorest.EndPoint `method:"POST" path:"/profile/" postdata:"Profile"`

	//Utility Actions
	ingestSolves gorest.EndPoint `method:"GET" path:"/ingest/{userId:string}" output:"string"`
	updateStats  gorest.EndPoint `method:"GET" path:"/statsupdate/" output:"Stats"`

	//On a real app for placeOrder below, the POST URL would probably be just /orders/, this is just to
	// demo the ability of mixing post-data parameters with URL mapped parameters.
	//placeOrder  gorest.EndPoint `method:"POST" path:"/orders/new/{UserId:int}/{RequestDiscount:bool}" postdata:"Order"`
	//viewOrder     gorest.EndPoint `method:"GET" path:"/orders/{OrderId:int}" output:"Order"`
	//deleteOrder     gorest.EndPoint `method:"DELETE" path:"/orders/{OrderId:int}"`

}

type Login struct {
	Username, Password string
}

type User struct {
	Id       string
	Username string
	Password string
	Email    string
	Profile  Profile
}

type Profile struct {
	Id             string
	Username       string
	Inspection     bool
	CurrentSession Session
	Sessions       []Session
}

type Session struct {
	Id     int
	UserId string
	Name   string
}

type Stats struct {
	UserId      string
	CubeType    int
	Session     int
	Solutions   int
	Best        Stat
	Worst       Stat
	Average     Stat
	Average5    Stat
	Average12   Stat
	Average100  Stat
	BestAvg5    Stat
	BestAvg12   Stat
	BestAvg100  Stat
	Mean        Stat
	Mean3       Stat
	Mean5       Stat
	Mean12      Stat
	Mean100     Stat
	BestMean3   Stat
	BestMean5   Stat
	BestMean12  Stat
	BestMean100 Stat
	StdDev      Stat
}

type Stat struct {
	Time    int
	Display string
}
type UserInfo struct {
	Id, Token string
}

type Solves struct {
	Id          string
	User        string
	Session     int
	Date        time.Time
	Scramble    string
	Time        int
	DisplayTime string
	Type        int
	Dnf         bool
	Penalty     bool
}
type Response struct {
	Id      string
	Status  string
	Message string
	Stats   Stats
}

func (serv CubeService) GetSolves() (result []Solves) {
	session := getSession()
	defer session.Close()
	AccessCheck(serv.Context.Request(), session)
	c := session.DB("cuberific").C("solves")
	iter := c.Find(nil).Limit(100).Iter()
	err := iter.All(&result)
	if err != nil {
		fmt.Println(err)
	}
	return
}
func (serv CubeService) GetUsers() (result []User) {
	session := getSession()
	defer session.Close()
	AccessCheck(serv.Context.Request(), session)
	c := session.DB("cuberific").C("users")
	iter := c.Find(nil).Limit(100).Iter()
	err := iter.All(&result)
	if err != nil {
		fmt.Println(err)
	}
	return
}

func (serv CubeService) GetProfile(UserId string) (profile Profile) {
	session := getSession()
	defer session.Close()
	c := session.DB("cuberific").C("profiles")
	err := c.Find(bson.M{"id": UserId}).One(&profile)
	if err != nil {
		fmt.Println(err)
	}
	//profile.Stats = GetProfileStats(3, -1, UserId)
	return
}

func (serv CubeService) UpdateProfile(profile Profile) {
	session := getSession()
	defer session.Close()
	c := session.DB("cuberific").C("profiles")
	err := c.Update(bson.M{"id": profile.Id}, profile)
	if err != nil {
		fmt.Println(err)
	}
}

func (serv CubeService) AddUser(user User) {
	session := getSession()
	defer session.Close()
	c := session.DB("cuberific").C("users")
	//check to see if user already exits
	count, err := c.Find(bson.M{"username": user.Username}).Count()
	if err != nil {
		log.Println("Error Checking for user")
	}

	if count == 0 {
		user.Id = GetUUID()
		password, err := Crypt([]byte(user.Password))
		if err != nil {
			log.Fatal(err)
		}
		user.Password = string(password)
		c := session.DB("cuberific").C("users")
		err = c.Insert(user)
		if err != nil {
			panic(err)
		}
		/*profile := new(Profile)
		session := Session{"Id": GetUUID(), "UserId": user.Id, "Name": "default"}
		profile.Id = user.Id
		sessId := GetUUID()
		profile.CurrentSession = Session{"Id": sessId, "UserId": user.Id, "Name": "default"}
		profile.Sessions = []Session{"Id": sessId, "UserId": user.Id, "Name": "default"}*/
		UserInfo := new(UserInfo)
		UserInfo.Id = user.Id
		UserInfo.Token = Token(user.Username, user.Password)
		userString, err := json.Marshal(UserInfo)
		if err != nil {
			fmt.Println("error:", err)
		}
		serv.ResponseBuilder().AddHeader("Content-Type", "application/json")
		serv.ResponseBuilder().SetResponseCode(201).WriteAndOveride([]byte(userString))
		return
	}
}
func (serv CubeService) LoginUser(login Login) {
	session := getSession()
	defer session.Close()
	c := session.DB("cuberific").C("users")
	user := new(User)
	err := c.Find(bson.M{"username": login.Username}).One(&user)
	if err != nil {
		log.Println("Error Retrieving user")
	}
	err = CheckPassword([]byte(user.Password), []byte(login.Password))
	if err != nil {
		log.Println(err)
		response := new(Response)
		response.Status = "Failed"
		response.Message = "Invalid Username or Password"
		serv.ResponseBuilder().AddHeader("Content-Type", "application/json")
		serv.ResponseBuilder().SetResponseCode(201).WriteAndOveride([]byte(setResponse(response)))
		return

	} else {
		info := new(UserInfo)
		info.Id = user.Id
		info.Token = Token(user.Username, user.Password)
		userInfo, err := json.Marshal(info)
		if err != nil {
			fmt.Println("error:", err)
		}
		serv.ResponseBuilder().AddHeader("Content-Type", "application/json")
		serv.ResponseBuilder().SetResponseCode(201).WriteAndOveride([]byte(userInfo))
		return
	}
}

func (serv CubeService) AddSolve(solve Solves) {
	session := getSession()
	defer session.Close()
	AccessCheck(serv.Context.Request(), session)
	solve.Id = string(GetUUID())
	c := session.DB("cuberific").C("solves")
	c.Insert(solve)

	stats := UpdateUserStats(solve.User, solve.Type, solve.Session)
	response := new(Response)
	response.Status = "Success"
	response.Message = "Solve Added"
	response.Id = solve.Id
	response.Stats = stats
	serv.ResponseBuilder().AddHeader("Content-Type", "application/json")
	serv.ResponseBuilder().SetResponseCode(201).WriteAndOveride(setResponse(response))
	return
}
func (serv CubeService) GetUserSolves(cubeType int, userSession int, userId string) []Solves {
	session := getSession()
	defer session.Close()
	AccessCheck(serv.Context.Request(), session)
	c := session.DB("cuberific").C("solves")
	result := []Solves{}
	query := bson.M{"type": cubeType, "user": userId, "session": userSession}
	limit := 500
	if userSession == -1 {
		query = bson.M{"type": cubeType, "user": userId}
		limit = 0
	}
	iter := c.Find(query).Sort("-date").Limit(limit).Iter()
	err := iter.All(&result)
	if err != nil {
		fmt.Println(err)
	}
	return result
}

func (serv CubeService) GetStats(cubeType int, userSession int, userId string) Stats {
	session := getSession()
	defer session.Close()
	AccessCheck(serv.Context.Request(), session)
	c := session.DB("cuberific").C("userstats")
	result := Stats{}
	err := c.Find(bson.M{"userid": userId, "cubetype": cubeType, "session": userSession}).One(&result)
	if err != nil {
		fmt.Println(err)
		UpdateUserStats(userId, cubeType, userSession)
	}
	err = c.Find(bson.M{"userid": userId, "cubetype": cubeType, "session": userSession}).One(&result)
	if err != nil {
		fmt.Println(err)
	}
	return result
}

func (serv CubeService) AlterSolve(Action string, Status bool, UserId string, SolveId string) string {
	session := getSession()
	defer session.Close()
	AccessCheck(serv.Context.Request(), session)
	c := session.DB("cuberific").C("solves")
	response := new(Response)
	update := false
	if Action == "Dnf" {
		update = true
	}
	if Action == "Penalty" {
		update = true
	}
	if !update {
		response.Status = "Failed"
		response.Message = "Unknown Action"
	} else {
		change := bson.M{"$set": bson.M{strings.ToLower(Action): Status}}
		err := c.Update(bson.M{"user": UserId, "id": SolveId}, change)
		if err != nil {
			fmt.Println(err)
		}
		response.Status = "Sucess"
		response.Message = "Solve Updated"
		statsInfo := getSolveInfo(SolveId, session)
		stats := UpdateUserStats(statsInfo.User, statsInfo.Type, statsInfo.Session)
		response.Stats = stats
	}
	result, err := json.Marshal(response)
	if err != nil {
		fmt.Println("error:", err)
	}
	return string(result)
}

func (serv CubeService) DeleteSolve(solveId string) {
	session := getSession()
	defer session.Close()
	AccessCheck(serv.Context.Request(), session)
	statsInfo := getSolveInfo(solveId, session)
	c := session.DB("cuberific").C("solves")
	err := c.Remove(bson.M{"id": solveId})
	if err != nil {
		fmt.Println(err)
	}
	stats := UpdateUserStats(statsInfo.User, statsInfo.Type, statsInfo.Session)

	response := new(Response)
	response.Status = "Success"
	response.Message = "Solve Removed"
	response.Stats = stats
	serv.ResponseBuilder().AddHeader("Content-Type", "application/json")
	serv.ResponseBuilder().SetResponseCode(201).WriteAndOveride([]byte(setResponse(response)))
}

func (serv CubeService) IngestSolves(userId string) string {
	session := getSession()
	defer session.Close()
	file, err := ioutil.ReadFile("/var/www/vhosts/SiteName/solves.json")
	if err != nil {
		fmt.Println("Error Reading File")
		panic(err)
	}
	solves := []Solves{}
	err = json.Unmarshal(file, &solves)
	if err != nil {
		fmt.Println("error:", err)
	}
	c := session.DB("cuberific").C("solves")
	for _, solve := range solves {
		if solve.Id != "" {
			solve.User = userId
			c.Insert(solve)
		}
	}
	return "success"
}

func GetProfileStats(cubeType int, userSession int, userId string) Stats {
	session := getSession()
	defer session.Close()
	c := session.DB("cuberific").C("userstats")
	UpdateUserStats(userId, cubeType, userSession)
	result := Stats{}

	err := c.Find(bson.M{"userid": userId, "cubetype": cubeType, "session": userSession}).One(&result)
	if err != nil {
		fmt.Println(err)
	}
	err = c.Find(bson.M{"userid": userId, "cubetype": cubeType, "session": userSession}).One(&result)
	if err != nil {
		fmt.Println(err)
	}
	return result
}

func UpdateUserStats(userId string, cubeType int, userSession int) Stats {
	session := getSession()
	defer session.Close()
	c := session.DB("cuberific").C("userstats")

	solves := getSolves(userId, cubeType, userSession)
	stats := Stats{}
	err := c.Find(bson.M{"userid": userId, "cubetype": cubeType, "session": userSession}).One(&stats)
	if err != nil {
		fmt.Print("Updating Stats: ")
		fmt.Println(err)
	}
	stats.UserId = userId
	stats.CubeType = cubeType
	stats.Session = userSession
	stats.Solutions = len(solves)
	if len(solves) > 0 {
		stats.Best = Best(solves)
		stats.Worst = Worst(solves)
		if len(solves) > 2 {
			stats.BestMean3 = BestMean(solves, 3)
			stats.Mean3 = Mean(solves, 3)
			stats.Mean = Mean(solves, len(solves))
			stats.StdDev = StandardDeviation(solves)
		}
		if len(solves) > 4 {
			stats.Average5 = Average(solves, 5)
			stats.Mean5 = Mean(solves, 5)
			stats.BestMean5 = BestMean(solves, 5)
			stats.BestAvg5 = BestAverage(solves, 5)
			stats.Average = Average(solves, len(solves))
		}
		if len(solves) > 11 {
			stats.Average12 = Average(solves, 12)
			stats.Mean12 = Mean(solves, 12)
			stats.BestMean12 = BestMean(solves, 12)
			stats.BestAvg12 = BestAverage(solves, 12)
		}
		if len(solves) > 99 {
			stats.Average100 = Average(solves, 100)
			stats.BestAvg100 = Average(solves, 100)
			stats.Mean100 = Mean(solves, 100)
			stats.BestMean100 = BestMean(solves, 100)
		}
	}
	_, err = c.Upsert(bson.M{"userid": userId, "cubetype": cubeType, "session": userSession}, stats)
	if err != nil {
		fmt.Println(err)
	}
	return stats
}

func (serv CubeService) UpdateStats() (stats Stats) {
	return UpdateUserStats("8c9e1f32-5420-4db1-42cb-753fb9e7fa6e", 3, 0)
}
