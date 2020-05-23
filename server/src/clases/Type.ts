export enum types {
    INT,
    STRING,
    BOOLEAN,
    CHAR,
    DOUBLE,
    VOID
}

export class Type{
    type : types;
    typeString: String;
 
    constructor(type: types){
        this.type = type;
        this.typeString = this.toString0()
    }


    
    toString0():String{
        if(this.type === types.BOOLEAN){
            return 'boolean';
        }else if(this.type === types.INT){
            return 'int';
        }else if(this.type === types.STRING){
            return 'string';
        }else if(this.type === types.CHAR){
            return 'char'
        }else if(this.type === types.VOID){
            return 'void'
        }else if(this.type === types.DOUBLE){
            return 'double'
        }else{
            return 'null'
        }
    }
}