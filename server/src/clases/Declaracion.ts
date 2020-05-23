import { Node } from "./Node"
import { Tree } from "./tree";
import { Exception } from "./Exception";
import { types, Type } from "./Type";
import { ListaId } from "./ListaId";


export class Declaracion extends Node {

    tipo: Type
    identificador: String
    value: Node;
    tipoInstruccion = "declaracion"

    constructor(tipo: Type, identificador: String, value:Node, line: Number, column: Number) {
        super( line, column);
        this.tipo = tipo;
        this.identificador = identificador;
        this.value = value;

    }
}