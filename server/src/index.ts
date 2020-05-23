import express ,{Application} from 'express'
import  indexRoutes  from "./routes/indexroutes";
import * as cors from "cors";
import bodyParser from 'body-parser';


class Server{

    fs = require("fs")

   //  lexer = new this.jisonLex(this.symbols)
    public app : Application
    constructor(){
       this.app = express();
       this.config()
       this.routes()


       
    }


    

    config(): void{
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:false}))
    }

    routes(): void{
     
        this.app.use(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, XMLHttpRequest, Content-Type, Authorization');
            if(req.method == "OPTIONS") {
              res.sendStatus(200);
            } else {
              next();
            }
          });
          this.app.use(bodyParser.json());
          this.app.use('/',indexRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'), ()=>{

                console.log('Server on port:'+this.app.get('port'))
         
               
             }
        
        )
    }



    
  

}



const server = new Server();
server.start()