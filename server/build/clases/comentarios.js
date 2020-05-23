"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Comentario extends Node_1.Node {
    constructor(coment, line, column) {
        super(line, column);
        this.tipoInstruccion = "comentario";
        this.coment = coment;
    }
}
exports.Comentario = Comentario;
