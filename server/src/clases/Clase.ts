import { Node } from "./Node";


export class Clase extends Node {
    identificador: String;
    instrucciones: Array<Node>
   tipoInstruccion = "clase"


    constructor(identificador:String, instrucciones:Array<Node>, line: Number, column: Number) {
        
        super( line, column);
        this.identificador = identificador;
        this.instrucciones = instrucciones;
    }

}