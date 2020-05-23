"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class If extends Node_1.Node {
    constructor(condition, IfList, ElseList, line, column) {
        super(line, column);
        this.tipoInstruccion = "if";
        this.condition = condition;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }
}
exports.If = If;
