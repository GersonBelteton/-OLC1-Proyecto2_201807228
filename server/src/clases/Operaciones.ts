import { Node } from "./Node";


export class Operaciones extends Node {
    leftOperator: Node;
    rightOperator: Node;
    Operator: String;
    tipoInstruccion = "exprecion"
    constructor(leftOperator: Node, rightOperator: Node, Operator: String, line: Number, column: Number) {
        
        super( line, column);
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
        this.Operator = Operator;
    }

}