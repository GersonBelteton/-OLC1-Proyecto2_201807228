"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Case extends Node_1.Node {
    constructor(tipo, exprecion, instrucciones, line, column) {
        super(line, column);
        this.tipoInstruccion = "case";
        this.tipo = tipo;
        this.exprecion = exprecion;
        this.instrucciones = instrucciones;
    }
}
exports.Case = Case;
