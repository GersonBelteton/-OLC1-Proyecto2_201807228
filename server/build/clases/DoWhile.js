"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class DoWhile extends Node_1.Node {
    constructor(condicion, instrucciones, line, column) {
        super(line, column);
        this.tipoInstruccion = "do";
        this.condicion = condicion;
        this.instrucciones = instrucciones;
    }
}
exports.DoWhile = DoWhile;
