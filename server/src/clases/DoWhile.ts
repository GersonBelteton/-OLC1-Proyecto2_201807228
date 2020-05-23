import { Node } from "./Node"
import { Tree } from "./tree";
import { Exception } from "./Exception";



export class DoWhile extends Node {

   
    condicion: Node
    instrucciones: Array<Node>

    tipoInstruccion = "do"
    constructor( condicion:Node, instrucciones:Array<Node>, line: Number, column: Number) {
        super( line, column);
        this.condicion = condicion;
        this.instrucciones = instrucciones;

    }
}