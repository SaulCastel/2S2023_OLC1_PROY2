const escapeStr = require('./String.cjs')

class TYPE{
    constructor(type){
        this.type = type
    }
    setVal(){}
}

class INT extends TYPE{
    constructor(type, value){
        super(type)
        this.setVal(value)
    }
    setVal(value){
        this.value = Math.trunc(value)
    }
    valueOf(){
        return this.value
    }
    toString(){
        return String(this.value)
    }
}

class DOUBLE extends TYPE{
    constructor(type, value){
        super(type)
        this.setVal(value)
        this.setDecimals(8)
    }
    setVal(value){
        this.value = Number(value)
    }
    setDecimals(num){
        this.decimals = num
    }
    valueOf(){
        return this.value
    }
    toString(){
        return this.value.toFixed(this.decimals)
    }
}

class DATE extends TYPE{
    constructor(type, value){
        super(type)
        this.setVal(value)
    }
    setVal(value){
        this.value = new Date(String(value)+'CST')
    }
    valueOf(){
        return this.value.getTime()
    }
    toString(){
        return this.value.toISOString().split('T')[0]
    }
    setDate(arg){
        this.value.setDate(arg)
    }
}

class STRING extends TYPE{
    constructor(type, value){
        super(type)
        this.setVal(value)
    }
    setVal(value){
        this.value = escapeStr(String(value))
    }
    valueOf(){
        return this.value
    }
    toString(){
        return this.value
    }
}

class BOOLEAN extends TYPE{
    constructor(type, value){
        super(type)
        this.setVal(value)
    }
    setVal(value){
        this.value = value.valueOf()
    }
    valueOf(){
        return this.value
    }
    toString(){
        return String(this.value)
    }
}

class NULL extends TYPE{
    constructor(type){
        super(type)
        this.setVal()
    }
    setVal(){
        this.value = null
    }
    valueOf(){
        return this.value
    }
    toString(){
        return String(this.value)
    }
}

class PROC extends TYPE{
    constructor(type, value){
        super(type)
        this.setVal(value)
    }

    valueOf(){
        return this.value
    }

    setVal(value){
        this.value = value
    }
}

class FUNC extends TYPE{
    constructor(type, value){
        super(type)
        this.setVal(value)
    }

    valueOf(){
        return this.value
    }

    setVal(value){
        this.value = value
    }
}

class CONTINUE extends TYPE{
    constructor(type){
        super(type)
    }
}

class BREAK extends TYPE{
    constructor(type){
        super(type)
    }
}

module.exports = {
    INT,
    DOUBLE,
    STRING,
    DATE,
    BOOLEAN,
    NULL,
    PROC,
    FUNC,
    CONTINUE,
    BREAK,
}
