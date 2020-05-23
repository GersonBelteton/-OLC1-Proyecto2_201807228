"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Asignacion extends Node_1.Node {
    constructor(identifier, value, line, column) {
        super(line, column);
        this.tipoInstruccion = "asignacion";
        this.identifier = identifier;
        this.value = value;
    }
}
exports.Asignacion = Asignacion;
