import { Node } from "./Node"
import { Tree } from "./tree";
import { Exception } from "./Exception";



export class LlamadaMetodo extends Node {

   
    identificador: String;
    expreciones: Array<Node>


    constructor( identificador:String, expreciones: Array<Node>, line: Number, column: Number) {
        super( line, column)
        this.identificador = identificador
        this.expreciones = expreciones

    }
}