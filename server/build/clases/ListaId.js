"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
/**
 * @class Inserta una nueva variable en la tabla de simbolos
 */
class ListaId extends Node_1.Node {
    /**
     *
     */
    constructor(type, identifier, value, line, column) {
        super(line, column);
        this.identifier = identifier;
        this.value = value;
    }
}
exports.ListaId = ListaId;
