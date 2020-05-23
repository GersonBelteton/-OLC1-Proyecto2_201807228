import { Node } from "./Node"
import { Tree } from "./tree";
import { Exception } from "./Exception";



export class For extends Node {

    decasig: Node
    condicion: Node
    incdec: Node
    instrucciones: Array<Node>

    tipoInstruccion = "for"


    constructor( decasig:Node, condicion:Node, incdec:Node, instrucciones:Array<Node>, line: Number, column: Number) {
        super( line, column);
        this.decasig = decasig
        this.condicion = condicion;
        this.incdec = incdec;
        this.instrucciones = instrucciones;

    }
}