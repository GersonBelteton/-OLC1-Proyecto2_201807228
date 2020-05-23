"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Primitivo extends Node_1.Node {
    constructor(type, value, line, column) {
        super(line, column);
        this.tipoInstruccion = "primitivo";
        this.value = value;
    }
}
exports.Primitivo = Primitivo;
