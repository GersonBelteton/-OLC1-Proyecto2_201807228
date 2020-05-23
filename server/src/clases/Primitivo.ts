  
import {Node} from "./Node";
import { Type } from "./Type";


export class Primitivo extends Node{
    value: Object;

    tipoInstruccion = "primitivo"
    constructor(type:Type, value: Object, line: Number, column: Number){
        super(line, column);
        this.value = value;
    }
}