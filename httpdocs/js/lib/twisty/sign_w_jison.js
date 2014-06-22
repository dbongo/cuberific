/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var sign_w_jison = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"ALG":4,"EOF":5,"OPTIONAL_WHITESPACE":6,"LAYER":7,"NUMBER":8,"REPETITION":9,"AMOUNT":10,"PRIME":11,"BASE_WIDE":12,"BASE_W":13,"BASE_LOWERCASE":14,"BASE":15,"BASE_UPPERCASE":16,"BASE_ROTATION":17,"BASE_SLICE":18,"PAUSE":19,"BLOCK":20,"DASH":21,"WHITESPACE":22,"REPEATABLE":23,"OPEN_BRACKET":24,"COMMA":25,"CLOSE_BRACKET":26,"COLON":27,"OPEN_PARENTHESIS":28,"CLOSE_PARENTHESIS":29,"REPEATED":30,"NEWLINE":31,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"NUMBER",11:"PRIME",13:"BASE_W",14:"BASE_LOWERCASE",16:"BASE_UPPERCASE",17:"BASE_ROTATION",18:"BASE_SLICE",19:"PAUSE",21:"DASH",22:"WHITESPACE",24:"OPEN_BRACKET",25:"COMMA",26:"CLOSE_BRACKET",27:"COLON",28:"OPEN_PARENTHESIS",29:"CLOSE_PARENTHESIS",31:"NEWLINE"},
productions_: [0,[3,2],[3,2],[7,1],[9,1],[10,1],[10,2],[10,1],[12,1],[12,1],[15,1],[15,1],[15,1],[15,1],[15,1],[20,1],[20,2],[20,2],[20,4],[6,1],[6,0],[6,2],[23,1],[23,5],[23,5],[23,3],[30,1],[30,2],[30,1],[4,3],[4,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]); return $$[$0-1]; 
break;
case 2: return []; 
break;
case 3:this.$ = parseInt($$[$0]);
break;
case 4:this.$ = parseInt($$[$0]);
break;
case 6:this.$ = -$$[$0-1];
break;
case 7:this.$ = -1;
break;
case 15:this.$ = {type: "move", base: $$[$0]};
break;
case 16:this.$ = {type: "move", base: $$[$0], layer: $$[$0-1]};
break;
case 17:this.$ = {type: "move", base: $$[$0], endLayer: $$[$0-1]};
break;
case 18:this.$ = {type: "move", base: $$[$0], startLayer: $$[$0-3], endLayer: $$[$0-1]};
break;
case 23:this.$ = {"type": "commutator", "A": $$[$0-3], "B": $$[$0-1]};
break;
case 24:this.$ = {"type": "conjugate", "A": $$[$0-3], "B": $$[$0-1]};
break;
case 25:this.$ = {"type": "group", "A": $$[$0-1]};
break;
case 26:$$[$0].amount = 1; this.$ = $$[$0];
break;
case 27:$$[$0-1].amount = $$[$0]; this.$ = $$[$0-1];
break;
case 28:this.$ = {type: "move", base: ".", amount: 1};
break;
case 29:this.$ = [$$[$0-1]]; $$[$0-1].location = _$[$0-1];
break;
case 30:this.$ = $$[$0-1].concat($$[$0]);
break;
}
},
table: [{3:1,4:2,5:[2,20],6:3,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],28:[2,20],31:[2,20]},{1:[3]},{4:6,5:[1,5],6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],28:[2,20],31:[2,20]},{5:[1,8],6:10,7:17,8:[1,23],12:18,13:[1,24],14:[1,25],15:16,16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:13,22:[1,4],23:11,24:[1,14],28:[1,15],30:9,31:[1,12]},{5:[2,19],8:[2,19],13:[2,19],14:[2,19],16:[2,19],17:[2,19],18:[2,19],19:[2,19],22:[2,19],24:[2,19],25:[2,19],26:[2,19],27:[2,19],28:[2,19],29:[2,19],31:[2,19]},{1:[2,1]},{4:6,5:[2,30],6:7,8:[2,30],13:[2,30],14:[2,30],16:[2,30],17:[2,30],18:[2,30],19:[2,30],22:[1,4],24:[2,30],25:[2,30],26:[2,30],27:[2,30],28:[2,30],29:[2,30],31:[2,30]},{6:10,7:17,8:[1,23],12:18,13:[1,24],14:[1,25],15:16,16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:13,22:[1,4],23:11,24:[1,14],28:[1,15],30:9,31:[1,12]},{1:[2,2]},{5:[2,20],6:26,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[2,20],29:[2,20],31:[2,20]},{5:[2,21],6:10,8:[2,21],13:[2,21],14:[2,21],16:[2,21],17:[2,21],18:[2,21],19:[2,21],22:[1,4],24:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[2,21],29:[2,21],31:[2,21]},{5:[2,26],8:[1,30],9:28,10:27,11:[1,29],13:[2,26],14:[2,26],16:[2,26],17:[2,26],18:[2,26],19:[2,26],22:[2,26],24:[2,26],25:[2,26],26:[2,26],27:[2,26],28:[2,26],29:[2,26],31:[2,26]},{5:[2,28],8:[2,28],13:[2,28],14:[2,28],16:[2,28],17:[2,28],18:[2,28],19:[2,28],22:[2,28],24:[2,28],25:[2,28],26:[2,28],27:[2,28],28:[2,28],29:[2,28],31:[2,28]},{5:[2,22],8:[2,22],11:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],18:[2,22],19:[2,22],22:[2,22],24:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22],29:[2,22],31:[2,22]},{4:31,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],28:[2,20],31:[2,20]},{4:32,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],28:[2,20],31:[2,20]},{5:[2,15],8:[2,15],11:[2,15],13:[2,15],14:[2,15],16:[2,15],17:[2,15],18:[2,15],19:[2,15],22:[2,15],24:[2,15],25:[2,15],26:[2,15],27:[2,15],28:[2,15],29:[2,15],31:[2,15]},{12:34,13:[1,24],14:[1,25],16:[1,33],21:[1,35]},{5:[2,10],8:[2,10],11:[2,10],13:[2,10],14:[2,10],16:[2,10],17:[2,10],18:[2,10],19:[2,10],22:[2,10],24:[2,10],25:[2,10],26:[2,10],27:[2,10],28:[2,10],29:[2,10],31:[2,10]},{5:[2,11],8:[2,11],11:[2,11],13:[2,11],14:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],22:[2,11],24:[2,11],25:[2,11],26:[2,11],27:[2,11],28:[2,11],29:[2,11],31:[2,11]},{5:[2,12],8:[2,12],11:[2,12],13:[2,12],14:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],22:[2,12],24:[2,12],25:[2,12],26:[2,12],27:[2,12],28:[2,12],29:[2,12],31:[2,12]},{5:[2,13],8:[2,13],11:[2,13],13:[2,13],14:[2,13],16:[2,13],17:[2,13],18:[2,13],19:[2,13],22:[2,13],24:[2,13],25:[2,13],26:[2,13],27:[2,13],28:[2,13],29:[2,13],31:[2,13]},{5:[2,14],8:[2,14],11:[2,14],13:[2,14],14:[2,14],16:[2,14],17:[2,14],18:[2,14],19:[2,14],22:[2,14],24:[2,14],25:[2,14],26:[2,14],27:[2,14],28:[2,14],29:[2,14],31:[2,14]},{13:[2,3],14:[2,3],16:[2,3],21:[2,3]},{5:[2,8],8:[2,8],11:[2,8],13:[2,8],14:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[2,8],22:[2,8],24:[2,8],25:[2,8],26:[2,8],27:[2,8],28:[2,8],29:[2,8],31:[2,8]},{5:[2,9],8:[2,9],11:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],18:[2,9],19:[2,9],22:[2,9],24:[2,9],25:[2,9],26:[2,9],27:[2,9],28:[2,9],29:[2,9],31:[2,9]},{5:[2,29],6:10,8:[2,29],13:[2,29],14:[2,29],16:[2,29],17:[2,29],18:[2,29],19:[2,29],22:[1,4],24:[2,29],25:[2,29],26:[2,29],27:[2,29],28:[2,29],29:[2,29],31:[2,29]},{5:[2,27],8:[2,27],13:[2,27],14:[2,27],16:[2,27],17:[2,27],18:[2,27],19:[2,27],22:[2,27],24:[2,27],25:[2,27],26:[2,27],27:[2,27],28:[2,27],29:[2,27],31:[2,27]},{5:[2,5],8:[2,5],11:[1,36],13:[2,5],14:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],22:[2,5],24:[2,5],25:[2,5],26:[2,5],27:[2,5],28:[2,5],29:[2,5],31:[2,5]},{5:[2,7],8:[2,7],13:[2,7],14:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],22:[2,7],24:[2,7],25:[2,7],26:[2,7],27:[2,7],28:[2,7],29:[2,7],31:[2,7]},{5:[2,4],8:[2,4],11:[2,4],13:[2,4],14:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],22:[2,4],24:[2,4],25:[2,4],26:[2,4],27:[2,4],28:[2,4],29:[2,4],31:[2,4]},{4:6,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],25:[1,37],27:[1,38],28:[2,20],31:[2,20]},{4:6,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],28:[2,20],29:[1,39],31:[2,20]},{5:[2,16],8:[2,16],11:[2,16],13:[2,16],14:[2,16],16:[2,16],17:[2,16],18:[2,16],19:[2,16],22:[2,16],24:[2,16],25:[2,16],26:[2,16],27:[2,16],28:[2,16],29:[2,16],31:[2,16]},{5:[2,17],8:[2,17],11:[2,17],13:[2,17],14:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],22:[2,17],24:[2,17],25:[2,17],26:[2,17],27:[2,17],28:[2,17],29:[2,17],31:[2,17]},{7:40,8:[1,23]},{5:[2,6],8:[2,6],13:[2,6],14:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],22:[2,6],24:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],29:[2,6],31:[2,6]},{4:41,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],28:[2,20],31:[2,20]},{4:42,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],28:[2,20],31:[2,20]},{5:[2,25],8:[2,25],11:[2,25],13:[2,25],14:[2,25],16:[2,25],17:[2,25],18:[2,25],19:[2,25],22:[2,25],24:[2,25],25:[2,25],26:[2,25],27:[2,25],28:[2,25],29:[2,25],31:[2,25]},{12:43,13:[1,24],14:[1,25]},{4:6,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],26:[1,44],28:[2,20],31:[2,20]},{4:6,6:7,8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],22:[1,4],24:[2,20],26:[1,45],28:[2,20],31:[2,20]},{5:[2,18],8:[2,18],11:[2,18],13:[2,18],14:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],22:[2,18],24:[2,18],25:[2,18],26:[2,18],27:[2,18],28:[2,18],29:[2,18],31:[2,18]},{5:[2,23],8:[2,23],11:[2,23],13:[2,23],14:[2,23],16:[2,23],17:[2,23],18:[2,23],19:[2,23],22:[2,23],24:[2,23],25:[2,23],26:[2,23],27:[2,23],28:[2,23],29:[2,23],31:[2,23]},{5:[2,24],8:[2,24],11:[2,24],13:[2,24],14:[2,24],16:[2,24],17:[2,24],18:[2,24],19:[2,24],22:[2,24],24:[2,24],25:[2,24],26:[2,24],27:[2,24],28:[2,24],29:[2,24],31:[2,24]}],
defaultActions: {5:[2,1],8:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 22
break;
case 1:return 8
break;
case 2:return 21
break;
case 3:return 13
break;
case 4:return 16
break;
case 5:return 14
break;
case 6:return 17
break;
case 7:return 18
break;
case 8:return 11
break;
case 9:return 19
break;
case 10:/* ignore comment */
break;
case 11:/* ignore comment */
break;
case 12:return 31
break;
case 13:return 24
break;
case 14:return 26
break;
case 15:return 28
break;
case 16:return 29
break;
case 17:return 25
break;
case 18:return 27
break;
case 19:return 5
break;
case 20:return 'INVALID'
break;
}
},
rules: [/^(?:[^\S\r\n]+)/,/^(?:[0-9]+)/,/^(?:-)/,/^(?:(Rw|Fw|Uw|Bw|Lw|Dw))/,/^(?:(R|F|U|B|L|D))/,/^(?:(r|f|u|b|l|d))/,/^(?:(x|y|z))/,/^(?:(M|E|S))/,/^(?:')/,/^(?:\.)/,/^(?:\/\/[^\n\r]*)/,/^(?:\/\*[^]*?\*\/)/,/^(?:[\n\r])/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?::)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = sign_w_jison;
exports.Parser = sign_w_jison.Parser;
exports.parse = function () { return sign_w_jison.parse.apply(sign_w_jison, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}