import { Node } from "./Node"
import { Tree } from "./tree";
import { Exception } from "./Exception";



export class Case extends Node {

   tipo:String;
    exprecion: Node
    instrucciones: Array<Node>

    tipoInstruccion = "case"
    constructor(tipo:String,  exprecion:Node, instrucciones:Array<Node>, line: Number, column: Number) {
        super( line, column);
        this.tipo = tipo;
        this.exprecion = exprecion;
        this.instrucciones = instrucciones;

    }
}