import { Node } from "./Node"
import { Tree } from "./tree";
import { types, Type } from "./Type";
import { Declaracion } from "./Declaracion";


export class Metodo extends Node {

    tipo: Type
    identificador: String
    parametros: Array<Node>
    instrucciones: Array<Node>
    tipoInstruccion = "metodo"

    constructor(tipo: Type, identificador: String, parametros:Array<Node>, instrucciones: Array<Node> , line: Number, column: Number) {
        super( line, column);
        this.tipo = tipo;
        this.identificador = identificador;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
      

    }
}