import { Node } from "./Node";


export class Print extends Node {
    print: Node;
    tipoInstruccion = "print"
   


    constructor(print:Node,  line: Number, column: Number) {
        
        super( line, column);
       this.print = print;
    }

}