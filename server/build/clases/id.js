"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Identificador extends Node_1.Node {
    constructor(identifier, line, column) {
        // tipo null porque aun no se el tipo
        super(line, column);
        this.tipoInstruccion = "identificador";
        this.identifier = identifier;
    }
}
exports.Identificador = Identificador;
