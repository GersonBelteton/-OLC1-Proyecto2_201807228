"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Importar extends Node_1.Node {
    constructor(identificador, line, column) {
        super(line, column);
        this.tipoInstruccion = "Import";
        this.identificador = identificador;
    }
}
exports.Importar = Importar;
