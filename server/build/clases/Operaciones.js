"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Operaciones extends Node_1.Node {
    constructor(leftOperator, rightOperator, Operator, line, column) {
        super(line, column);
        this.tipoInstruccion = "exprecion";
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
        this.Operator = Operator;
    }
}
exports.Operaciones = Operaciones;
