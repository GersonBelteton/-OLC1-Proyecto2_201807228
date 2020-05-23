"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Print extends Node_1.Node {
    constructor(print, line, column) {
        super(line, column);
        this.tipoInstruccion = "print";
        this.print = print;
    }
}
exports.Print = Print;
