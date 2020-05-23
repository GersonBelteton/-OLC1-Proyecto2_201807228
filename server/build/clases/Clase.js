"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Clase extends Node_1.Node {
    constructor(identificador, instrucciones, line, column) {
        super(line, column);
        this.tipoInstruccion = "clase";
        this.identificador = identificador;
        this.instrucciones = instrucciones;
    }
}
exports.Clase = Clase;
