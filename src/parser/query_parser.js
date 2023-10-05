/* parser generated by jison 0.4.18 */
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
var query_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,12],$V2=[1,13],$V3=[1,18],$V4=[1,14],$V5=[1,15],$V6=[1,16],$V7=[1,17],$V8=[1,19],$V9=[1,20],$Va=[1,21],$Vb=[1,22],$Vc=[1,23],$Vd=[1,24],$Ve=[1,25],$Vf=[1,34],$Vg=[1,29],$Vh=[1,30],$Vi=[1,31],$Vj=[1,32],$Vk=[1,33],$Vl=[1,35],$Vm=[1,36],$Vn=[1,37],$Vo=[1,38],$Vp=[1,39],$Vq=[1,40],$Vr=[1,41],$Vs=[7,23,28,36,37,38,39,40,41,42,43,44,45,46,47],$Vt=[5,15,22,24,26,29,32,37,48,49,50,51,52,53,54,55],$Vu=[7,28,46,47],$Vv=[7,23,28,36,37,41,42,43,44,45,46,47],$Vw=[7,23,28,41,42,43,44,45,46,47],$Vx=[1,79],$Vy=[1,74],$Vz=[1,75],$VA=[1,76],$VB=[1,77],$VC=[1,78],$VD=[7,17],$VE=[7,17,19,21,28];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"querys":3,"stmts":4,"EOF":5,"stmt":6,";":7,"var_declaration":8,"var_default":9,"var_assignment":10,"create_table":11,"alter_table":12,"drop_table":13,"expr":14,"DECLARE":15,"var_list":16,",":17,"@":18,"ID":19,"type":20,"DEFAULT":21,"SET":22,"=":23,"CREATE":24,"TABLE":25,"(":26,"column_list":27,")":28,"ALTER":29,"alter_action":30,"ADD":31,"DROP":32,"COLUMN":33,"RENAME":34,"TO":35,"+":36,"-":37,"*":38,"/":39,"%":40,"!=":41,"<":42,"<=":43,">":44,">=":45,"AND":46,"OR":47,"NOT":48,"INT_LITERAL":49,"DOUBLE_LITERAL":50,"DATE_LITERAL":51,"STRING_LITERAL":52,"TRUE":53,"FALSE":54,"NULL":55,"INT":56,"DOUBLE":57,"DATE":58,"VARCHAR":59,"BOOLEAN":60,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:";",15:"DECLARE",17:",",18:"@",19:"ID",21:"DEFAULT",22:"SET",23:"=",24:"CREATE",25:"TABLE",26:"(",28:")",29:"ALTER",31:"ADD",32:"DROP",33:"COLUMN",34:"RENAME",35:"TO",36:"+",37:"-",38:"*",39:"/",40:"%",41:"!=",42:"<",43:"<=",44:">",45:">=",46:"AND",47:"OR",48:"NOT",49:"INT_LITERAL",50:"DOUBLE_LITERAL",51:"DATE_LITERAL",52:"STRING_LITERAL",53:"TRUE",54:"FALSE",55:"NULL",56:"INT",57:"DOUBLE",58:"DATE",59:"VARCHAR",60:"BOOLEAN"},
productions_: [0,[3,2],[4,3],[4,2],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[8,2],[16,5],[16,3],[9,6],[10,5],[11,6],[27,6],[12,4],[30,3],[30,3],[30,3],[30,5],[13,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,2],[14,2],[14,3],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        this.$ = $$[$0-1]
        return this.$
    
break;
case 2:

        $$[$0-2].push($$[$0-1])
        this.$ = $$[$0-2]
    
break;
case 3:

        this.$ = []
        this.$.push($$[$0-1])
    
break;
case 10:
this.$ = this.$ = $$[$0];
break;
case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34:
this.$ = new Expr.Binary(nodeId++, $$[$0-2], $$[$0-1], $$[$0])
break;
case 35: case 36:
this.$ = new Expr.Binary(nodeId++, $$[$0-2], $$[$0-1].toUpperCase(), $$[$0])
break;
case 37:
this.$ = new Expr.Unary(nodeId++, $$[$0-1], $$[$0])
break;
case 38:
this.$ = new Expr.Unary(nodeId++, $$[$0-1].toUpperCase(), $$[$0])
break;
case 39:
this.$ = new Expr.Group(nodeId++, $$[$0-1])
break;
case 40:
this.$ = new Expr.Literal(nodeId++, 'INT', $$[$0])
break;
case 41:
this.$ = new Expr.Literal(nodeId++, 'DOUBLE', $$[$0])
break;
case 42:
this.$ = new Expr.Literal(nodeId++, 'DATE', $$[$0])
break;
case 43:
this.$ = new Expr.Literal(nodeId++, 'STRING', $$[$0].slice(1,-1))
break;
case 44:
this.$ = new Expr.Literal(nodeId++, 'TRUE', $$[$0])
break;
case 45:
this.$ = new Expr.Literal(nodeId++, 'FALSE', $$[$0])
break;
case 46:
this.$ = new Expr.Literal(nodeId++, 'NULL', $$[$0])
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,22:$V1,24:$V2,26:$V3,29:$V4,32:$V5,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{1:[3]},{5:[1,26],6:27,8:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,22:$V1,24:$V2,26:$V3,29:$V4,32:$V5,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{7:[1,28]},{7:[2,4]},{7:[2,5]},{7:[2,6]},{7:[2,7]},{7:[2,8]},{7:[2,9]},{7:[2,10],23:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk,41:$Vl,42:$Vm,43:$Vn,44:$Vo,45:$Vp,46:$Vq,47:$Vr},{16:42,18:[1,43]},{18:[1,44]},{25:[1,45]},{25:[1,46]},{25:[1,47]},{14:48,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:49,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:50,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},o($Vs,[2,40]),o($Vs,[2,41]),o($Vs,[2,42]),o($Vs,[2,43]),o($Vs,[2,44]),o($Vs,[2,45]),o($Vs,[2,46]),{1:[2,1]},{7:[1,51]},o($Vt,[2,3]),{14:52,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:53,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:54,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:55,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:56,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:57,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:58,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:59,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:60,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:61,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:62,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:63,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{14:64,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{7:[2,11],17:[1,65]},{19:[1,66]},{19:[1,67]},{19:[1,68]},{19:[1,69]},{19:[1,70]},o($Vs,[2,37]),o($Vu,[2,38],{23:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk,41:$Vl,42:$Vm,43:$Vn,44:$Vo,45:$Vp}),{23:$Vf,28:[1,71],36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk,41:$Vl,42:$Vm,43:$Vn,44:$Vo,45:$Vp,46:$Vq,47:$Vr},o($Vt,[2,2]),o($Vv,[2,24],{38:$Vi,39:$Vj,40:$Vk}),o($Vv,[2,25],{38:$Vi,39:$Vj,40:$Vk}),o($Vs,[2,26]),o($Vs,[2,27]),o($Vs,[2,28]),o($Vw,[2,29],{36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk}),o($Vw,[2,30],{36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk}),o($Vw,[2,31],{36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk}),o($Vw,[2,32],{36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk}),o($Vw,[2,33],{36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk}),o($Vw,[2,34],{36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk}),o($Vu,[2,35],{23:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk,41:$Vl,42:$Vm,43:$Vn,44:$Vo,45:$Vp}),o([7,28,47],[2,36],{23:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk,41:$Vl,42:$Vm,43:$Vn,44:$Vo,45:$Vp,46:$Vq}),{18:[1,72]},{20:73,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB,60:$VC},{23:[1,80]},{26:[1,81]},{30:82,31:[1,83],32:[1,84],34:[1,85]},{7:[2,23]},o($Vs,[2,39]),{19:[1,86]},o($VD,[2,13],{21:[1,87]}),o($VE,[2,47]),o($VE,[2,48]),o($VE,[2,49]),o($VE,[2,50]),o($VE,[2,51]),o($VE,[2,52]),{14:88,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{27:89},{7:[2,18]},{19:[1,90]},{33:[1,91]},{33:[1,93],35:[1,92]},{20:94,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB,60:$VC},{14:95,26:$V3,37:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve},{7:[2,15],23:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk,41:$Vl,42:$Vm,43:$Vn,44:$Vo,45:$Vp,46:$Vq,47:$Vr},{17:[1,97],28:[1,96]},{20:98,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB,60:$VC},{19:[1,99]},{19:[1,100]},{19:[1,101]},o($VD,[2,12]),{7:[2,14],23:$Vf,36:$Vg,37:$Vh,38:$Vi,39:$Vj,40:$Vk,41:$Vl,42:$Vm,43:$Vn,44:$Vo,45:$Vp,46:$Vq,47:$Vr},{7:[2,16]},{19:[1,102]},{7:[2,19]},{7:[2,20]},{7:[2,21]},{35:[1,103]},{20:104,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB,60:$VC},{19:[1,105]},{19:[1,106]},{7:[2,22]},{20:107,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB,60:$VC},o([17,28],[2,17])],
defaultActions: {4:[2,4],5:[2,5],6:[2,6],7:[2,7],8:[2,8],9:[2,9],26:[2,1],70:[2,23],82:[2,18],96:[2,16],98:[2,19],99:[2,20],100:[2,21],105:[2,22]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
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
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
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
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
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
                sharedState.yy,
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


const Expr = require('../interpreter/Expression.js');
const escapeString = require('../util/String.js');
var nodeId = 0;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
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
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
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
test_match:function(match, indexed_rule) {
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
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true,"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* no hacer nada */
break;
case 1:/* no hacer nada */
break;
case 2:this.pushState('comment');
break;
case 3:this.popState();
break;
case 4:/* no hacer nada */
break;
case 5:/* no hacer nada */
break;
case 6:return 53
break;
case 7:return 54
break;
case 8:return 15
break;
case 9:return 21
break;
case 10:return 22
break;
case 11:return 24
break;
case 12:return 25
break;
case 13:return 29
break;
case 14:return 25
break;
case 15:return 31
break;
case 16:return 32
break;
case 17:return 34
break;
case 18:return 33
break;
case 19:return 35
break;
case 20:return 46
break;
case 21:return 47
break;
case 22:return 48
break;
case 23:return 56
break;
case 24:return 57
break;
case 25:return 58
break;
case 26:return 59
break;
case 27:return 60
break;
case 28:return 55
break;
case 29:return 7
break;
case 30:return 18
break;
case 31:return 17
break;
case 32:return 26
break;
case 33:return 28
break;
case 34:return 36
break;
case 35:return 37
break;
case 36:return 38
break;
case 37:return 39
break;
case 38:return 40
break;
case 39:return 23
break;
case 40:return 44
break;
case 41:return 45
break;
case 42:return 42
break;
case 43:return 43
break;
case 44:return 41
break;
case 45:return 50
break;
case 46:return 49
break;
case 47:return 52
break;
case 48:return 51
break;
case 49:return 19
break;
case 50:return 5
break;
case 51:return 'INVALID'
break;
case 52:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/i,/^(?:(--.*))/i,/^(?:\/\*)/i,/^(?:\*\/)/i,/^(?:[^\n]+)/i,/^(?:\n)/i,/^(?:true)/i,/^(?:false)/i,/^(?:declare)/i,/^(?:default)/i,/^(?:set)/i,/^(?:create)/i,/^(?:table)/i,/^(?:alter)/i,/^(?:table)/i,/^(?:add)/i,/^(?:drop)/i,/^(?:rename)/i,/^(?:column)/i,/^(?:to)/i,/^(?:and)/i,/^(?:or)/i,/^(?:not)/i,/^(?:int)/i,/^(?:double)/i,/^(?:date)/i,/^(?:varchar)/i,/^(?:boolean)/i,/^(?:null)/i,/^(?:;)/i,/^(?:@)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:=)/i,/^(?:>)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:<=)/i,/^(?:!=)/i,/^(?:([0-9]+\.[0-9]+))/i,/^(?:([0-9]+))/i,/^(?:("(\\.|[^"\\])*"))/i,/^(?:([0-9]{4}-(10|[0-1][1-9])-(30|31|10|20[0-2][1-9])))/i,/^(?:([a-z][a-z0-9_-]*))/i,/^(?:$)/i,/^(?:.)/i,/^(?:.)/i],
conditions: {"comment":{"rules":[3,4,5],"inclusive":false},"INITIAL":{"rules":[0,1,2,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
});
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
exports.parser = query_parser;
exports.Parser = query_parser.Parser;
exports.parse = function () { return query_parser.parse.apply(query_parser, arguments); };
exports.main = function commonjsMain (args) {
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