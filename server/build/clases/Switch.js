"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class Switch extends Node_1.Node {
    constructor(exprecion, caseList, line, column) {
        super(line, column);
        this.tipoInstruccion = "switch";
        this.exprecion = exprecion;
        this.caseList = caseList;
    }
}
exports.Switch = Switch;
