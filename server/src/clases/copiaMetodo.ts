import { Declaracion } from "./Declaracion"
import { Parametro } from "./Parametro";
export class copiaMetodo{

    tipo:String
    nombreMetodo:String
    nombreClase:String
    parametros:Parametro[]

    constructor(tipo:String, nombreMetodo:String, nombreClase:String, parametros:Parametro[]){
        this.tipo = tipo
        this.nombreMetodo = nombreMetodo
        this.nombreClase = nombreClase
        this.parametros = parametros

    }


}