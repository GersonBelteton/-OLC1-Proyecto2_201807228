import { Node } from "./Node"
import { Tree } from "./tree";
import { Exception } from "./Exception";



export class While extends Node {

   
    condicion: Node
    instrucciones: Array<Node>
    tipoInstruccion = "while"

    constructor( condicion:Node, instrucciones:Array<Node>, line: Number, column: Number) {
        super( line, column);
        this.condicion = condicion;
        this.instrucciones = instrucciones;

    }
}