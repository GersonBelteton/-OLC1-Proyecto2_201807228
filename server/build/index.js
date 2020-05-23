"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor() {
        this.fs = require("fs");
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, XMLHttpRequest, Content-Type, Authorization');
            if (req.method == "OPTIONS") {
                res.sendStatus(200);
            }
            else {
                next();
            }
        });
        this.app.use(body_parser_1.default.json());
        this.app.use('/', indexroutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port:' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
