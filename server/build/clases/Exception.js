"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception {
    constructor(description) {
        this.tipoInstruccion = "Error";
        this.descError = description;
    }
}
exports.Exception = Exception;
