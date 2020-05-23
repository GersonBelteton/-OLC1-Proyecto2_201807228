import { Node } from "./Node"


export class Comentario extends Node {
    
    coment:String
    tipoInstruccion = "comentario"
     
    constructor(coment:String, line: Number, column: Number) {
        super( line, column);
        this.coment = coment
    }

}