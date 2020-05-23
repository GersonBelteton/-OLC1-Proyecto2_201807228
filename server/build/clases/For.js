"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class For extends Node_1.Node {
    constructor(decasig, condicion, incdec, instrucciones, line, column) {
        super(line, column);
        this.tipoInstruccion = "for";
        this.decasig = decasig;
        this.condicion = condicion;
        this.incdec = incdec;
        this.instrucciones = instrucciones;
    }
}
exports.For = For;
