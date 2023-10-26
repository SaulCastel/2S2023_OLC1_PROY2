const Literal = require('./Literal.cjs')

class Context{
    constructor(name, prev = null){
        this.name = name
        this.prev = prev
        this.symbols = {}
    }

    set(key, type, value){
        const symbol = this.get(key)
        if(symbol){
            symbol.setVal(value)
        }
        else{
            this.symbols[key] = new Literal(null, type, value).interpret()
        }
    }

    get(key){
        const symbol = this.symbols[key]
        if(symbol === undefined){
            if (this.prev !== null){
                return this.prev.get(key)
            }
        }
        return symbol
    }
}

module.exports = Context
