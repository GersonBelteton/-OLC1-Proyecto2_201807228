"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types;
(function (types) {
    types[types["INT"] = 0] = "INT";
    types[types["STRING"] = 1] = "STRING";
    types[types["BOOLEAN"] = 2] = "BOOLEAN";
    types[types["CHAR"] = 3] = "CHAR";
    types[types["DOUBLE"] = 4] = "DOUBLE";
    types[types["VOID"] = 5] = "VOID";
})(types = exports.types || (exports.types = {}));
class Type {
    constructor(type) {
        this.type = type;
        this.typeString = this.toString0();
    }
    toString0() {
        if (this.type === types.BOOLEAN) {
            return 'boolean';
        }
        else if (this.type === types.INT) {
            return 'int';
        }
        else if (this.type === types.STRING) {
            return 'string';
        }
        else if (this.type === types.CHAR) {
            return 'char';
        }
        else if (this.type === types.VOID) {
            return 'void';
        }
        else if (this.type === types.DOUBLE) {
            return 'double';
        }
        else {
            return 'null';
        }
    }
}
exports.Type = Type;
