import { Node } from "./Node"
import { Tree } from "./tree";
import { Exception } from "./Exception";
import { types, Type } from "./Type";


/**
 * @class Inserta una nueva variable en la tabla de simbolos
 */
export class ListaId extends Node {

    identifier: Array<Node>;
    value: Node;

    /**
     * 
     */
    constructor(type: Type, identifier: Array<Node>, value: Node, line: Number, column: Number) {
        super( line, column);
        this.identifier = identifier;
        this.value = value;
    }
}