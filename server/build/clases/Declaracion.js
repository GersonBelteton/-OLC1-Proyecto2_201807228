"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Declaracion extends Node_1.Node {
    constructor(tipo, identificador, value, line, column) {
        super(line, column);
        this.tipoInstruccion = "declaracion";
        this.tipo = tipo;
        this.identificador = identificador;
        this.value = value;
    }
}
exports.Declaracion = Declaracion;
