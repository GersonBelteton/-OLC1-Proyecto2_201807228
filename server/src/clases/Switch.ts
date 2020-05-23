import { Node } from "./Node"


export class Switch extends Node {
    exprecion: Node;
    caseList: Array<Node>;
 
    tipoInstruccion = "switch"
     
    constructor(exprecion: Node, caseList: Array<Node>,  line: Number, column: Number) {
        super( line, column);
        this.exprecion = exprecion;
        this.caseList = caseList
  
    }

}