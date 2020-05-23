import { Node } from "./Node";


export class Importar extends Node {
    identificador: String;
   tipoInstruccion = "Import"
   


    constructor(identificador:String, line: Number, column: Number) {

        super( line, column);
        this.identificador = identificador;
        
    }

}