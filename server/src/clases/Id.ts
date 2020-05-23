
import { Node } from "./Node";

export class Identificador extends Node {
    identifier: String;
    tipoInstruccion = "identificador"
    constructor(identifier: String, line: Number, column: Number) {
        // tipo null porque aun no se el tipo
        super(line, column);
        this.identifier = identifier;
    }

}