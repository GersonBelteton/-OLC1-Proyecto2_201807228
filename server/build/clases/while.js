"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class While extends Node_1.Node {
    constructor(condicion, instrucciones, line, column) {
        super(line, column);
        this.tipoInstruccion = "while";
        this.condicion = condicion;
        this.instrucciones = instrucciones;
    }
}
exports.While = While;
