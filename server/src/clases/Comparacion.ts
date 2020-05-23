import { Node } from "./Node";


export class Comparacion extends Node {
    leftOperator: Node;
    rightOperator: Node;
    Operator: String;

    tipoInstruccion = "comparacion"

    constructor(leftOperator: Node, rightOperator: Node, Operator: String, line: Number, column: Number) {
        super( line, column);
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
        this.Operator = Operator;
    }
}