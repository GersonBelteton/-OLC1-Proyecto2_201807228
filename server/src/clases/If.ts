import { Node } from "./Node"


export class If extends Node {
    condition: Node;
    IfList: Array<Node>;
    ElseList: Array<Node>;

    tipoInstruccion = "if"
     
    constructor(condition: Node, IfList: Array<Node>, ElseList: Array<Node>, line: Number, column: Number) {
        super( line, column);
        this.condition = condition;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }

}