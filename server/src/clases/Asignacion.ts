import { Node } from "./Node"


export class Asignacion extends Node {
    identifier: String;
    value: Node;
    tipoInstruccion = "asignacion"
    
    constructor(identifier: String, value: Node, line: Number, column: Number) {
        super( line, column);
        this.identifier = identifier;
        this.value = value;
    }
}