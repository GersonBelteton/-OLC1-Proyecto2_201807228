"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class LlamadaMetodo extends Node_1.Node {
    constructor(identificador, expreciones, line, column) {
        super(line, column);
        this.identificador = identificador;
        this.expreciones = expreciones;
    }
}
exports.LlamadaMetodo = LlamadaMetodo;
