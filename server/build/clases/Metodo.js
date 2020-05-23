"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Metodo extends Node_1.Node {
    constructor(tipo, identificador, parametros, instrucciones, line, column) {
        super(line, column);
        this.tipoInstruccion = "metodo";
        this.tipo = tipo;
        this.identificador = identificador;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
    }
}
exports.Metodo = Metodo;
