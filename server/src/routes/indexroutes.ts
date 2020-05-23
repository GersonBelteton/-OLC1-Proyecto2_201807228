import { Router } from 'express';
import { copiaClase } from "../clases/copiaClase";
import { copiaMetodo } from "../clases/copiaMetodo";
import { Declaracion } from '../clases/Declaracion';
import { Node } from "../clases/Node";
import { Parametro } from "../clases/Parametro";
import { copiaVariable } from "../clases/copiaVariable";
import {Request, Response} from 'express';
class IndexRoutes{




    fs = require("fs")


    errlex = "";
    errsin = "";
    entrada :any;
    entrada2: any;
    analisis:any;
    analisis2:any;
    listaClase:copiaClase[] = [];
    listaMetodo:copiaMetodo[] = []
    listaVariable:copiaVariable[] = []

    public router: Router = Router();
    constructor(){
        this.config();
        console.log(this.entrada)
    }

    config():void{
      
        this.router.get('/',(req, res)=> res.send("servidor :D"))
        this.router.get('/token',(req, res)=> res.send(this.lexico()))
        this.router.get('/errlex',(req, res)=> res.send(this.getErrLex()))
        this.router.get('/ast',(req, res)=> res.send(this.sintactico()))
        this.router.get('/errsin',(req, res)=> res.send(this.getErrSin()))
        this.router.get('/copiaclase',(req, res)=> res.send(this.listaClaseToString()))
        this.router.get('/copiametodo',(req, res)=> res.send(this.listaMetodoToString()))
        this.router.get('/copiavariable',(req, res)=> res.send(this.listaVariableToString()))
        this.router.post('/entrada',(req, res)=> {
            var body = req.body
            var dat = {
                ent:body.ent,
                ent2:body.ent2,
            }
            console.log(dat.ent)
             this.entrada = dat.ent
            this.entrada2 = dat.ent2

            res.send('entrada reeecibida')


        })

    
     
    }



    getErrLex(){
        return this.errlex
    }


    listaVariableToString():String{
        var lvs = ""
        for(var i = 0; i < this.listaVariable.length; i++){
            if(this.listaVariable[i] != null){
                lvs += "[Tipo: "+this.listaVariable[i].tipo+", Nombre: "+this.listaVariable[i].nombreVariable+" Metodo: "+this.listaVariable[i].nombreMetodo+" Clase: "+this.listaVariable[i].nombreClase+"] \n"
            }
            
        }
        return lvs
    }

    listaClaseToString():String{
        var lcs = ""
        for(var i = 0; i < this.listaClase.length; i++){
            if(this.listaClase[i] != null){
                lcs += "[Nombre: "+this.listaClase[i].nombreClase+", Numero de Métodos: "+this.listaClase[i].cantidadMetodos+"] \n"
            }
            
        }
        return lcs
    }

    listaMetodoToString():String{
        var lms = ""
        for(var i = 0; i < this.listaMetodo.length; i++){
            if(this.listaMetodo[i]!= null){
                lms += "[Tipo: "+this.listaMetodo[i].tipo+" Clase: "+this.listaMetodo[i].nombreClase+" Parametros:( "
               
                for(var j = 0; j < this.listaMetodo[i].parametros.length; j++){
                    if(this.listaMetodo[i].parametros[j]!= null){
                        lms += "Tipo"+this.listaMetodo[i].parametros[j].tipo+", nombre: "+this.listaMetodo[i].parametros[j].identificador
                    }
  
                }
                lms += ")]\n"
            }
 
        }

        return lms
    }
    lexico():String{

        this.errlex = ""
        var jisonLex = require('jison-lex')
        var symbols = this.fs.readFileSync('./analisis.jison', 'utf8');
        var lexerSource = jisonLex.generate(symbols)
        var lexer = new jisonLex(symbols)
        lexer.setInput(this.entrada) 
        var token;
        var salida = "";
      
        while (!lexer.done) {
            token = lexer.lex();
            if(token == "Error Lexico"){
                this.errlex += '<' + token + ', ' + lexer.yytext + '> \n'
            }else{
                salida += '<' + token + ', ' + lexer.yytext + '> \n'
            }
            
        }
/*import java; import java2; class & hola{int r = 6; void main(){x= y+1; System.out.print(\"holafsdfwdfsd\"); while(x == 0){x = x+1;} for(int i = 0; i < 6; i++){int x = 0; System.out.print(\"hola\");} if(x == 2){ System.out.print(\"Estoy en el if\");}else if( x >= 4){ System.out.print(\"Estoy en el elseif\");}else{ System.out.print(\"Estoy en el else\"); while(x != 8 || x > 3){x = 3;}}  switch(x){case 1: int x = 0; case 2: l = 1; break; default: x = 4;}y = metodo(1,p);}} */
        console.log(salida)

        return salida;   
    }

    getErrSin(){
        return this.errsin
    }
    sintactico():String{
        this.analisis = ""
        this.analisis2 = ""
        this.errsin = ""
        var Parser = require("jison").Parser
        var bf = this.fs.readFileSync('./analisis.jison','utf8')
        var parser = new Parser(bf)

       // var entrada = "import java; import java2;  class hola {int x = 7; void main(int l){metodo(p < 3  && y <7  , (h+1)*5); System.out.print(\" hola \"+\" adios\"+52); for(int y = 8; x < 5; x++){x = 0; break;}if(x<2){ int x = 28;} else if(x == 4){if(x != 0){int z = 5; x = x + 6 * y;}} else { int x = 0; switch(x){case 0: x = x + 1; break; case 1: y = x + 2;}} }void metodo (int z){int x = 0; x = x + 1; return x;}}";
       console.log("la entrada es:"+this.entrada)
        this.analisis = parser.parse(this.entrada)
        this.analisis2 = parser.parse(this.entrada2)

        for(var i = 0; i < this.analisis.instructions.length; i++){
            if(this.analisis.instructions[i].tipoInstruccion == "Error"){
                this.errsin += this.analisis.instructions[i].descError + '\n'
            }
   
        }
      
        console.log(this.errsin)

        this.copiaClase();
        //this.copiaClase()
        this.copiaMetodo();
        this.copiaVariable();
        //console.log(this.listaMetodo)
        //console.log(this.listaClase)
      //  console.log(this.listaVariable)
        return this.analisis;
    }




    copiaVariable(){
        
        for(var i = 0; i < this.analisis.instructions.length; i++){
            if(this.analisis.instructions[i].tipoInstruccion == "clase"){
                for(var j = 0; j <  this.analisis2.instructions.length; j++){
                    if(this.analisis2.instructions[j].tipoInstruccion == "clase"){
                        if(this.analisis.instructions[i].identificador == this.analisis2.instructions[j].identificador){
                            for(var k = 0; k < this.analisis.instructions[i].instrucciones.length; k++){
                            
                                if(this.analisis.instructions[i].instrucciones[k].tipoInstruccion == "metodo"){
                                    for(var l = 0; l < this.analisis2.instructions[j].instrucciones.length; l++){
                                        if(this.analisis2.instructions[j].instrucciones[l].tipoInstruccion=="metodo"){

                                            if(this.analisis.instructions[i].instrucciones[k].identificador == this.analisis2.instructions[j].instrucciones[l].identificador){
                                                if(this.analisis.instructions[i].instrucciones[k].tipo.type == this.analisis2.instructions[j].instrucciones[l].tipo.type){
                                                    for(var m = 0; m < this.analisis.instructions[i].instrucciones[k].instrucciones.length; m++){
                                                        if(this.analisis.instructions[i].instrucciones[k].instrucciones[m].tipoInstruccion == "declaracion"){
                                                            for(var n = 0; n < this.analisis2.instructions[j].instrucciones[l].instrucciones.length; n++){
                                                                if(this.analisis2.instructions[j].instrucciones[l].instrucciones[n].tipoInstruccion == "declaracion"){
                                                                    if(this.analisis.instructions[i].instrucciones[k].instrucciones[m].identificador == this.analisis2.instructions[j].instrucciones[l].instrucciones[n].identificador){
                                                                        if(this. analisis.instructions[i].instrucciones[k].instrucciones[m].tipo.type == this.analisis2.instructions[j].instrucciones[l].instrucciones[n].tipo.type){
                                                                            console.log("iguales");
                                                                            this.listaVariable.push(new copiaVariable(this. analisis.instructions[i].instrucciones[k].instrucciones[m].tipo.toString0(), 
                                                                            this.analisis.instructions[i].instrucciones[k].instrucciones[m].identificador, this.analisis.instructions[i].instrucciones[k].identificador, 
                                                                            this.analisis.instructions[i].identificador ))
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    copiaMetodo(){
   
        var iguales = false;
        
    


        for(var i = 0; i < this.analisis.instructions.length; i++){
            if(this.analisis.instructions[i].tipoInstruccion == "clase"){
                for(var j = 0; j <  this.analisis2.instructions.length; j++){
                    if(this.analisis2.instructions[j].tipoInstruccion == "clase"){
                        if(this.analisis.instructions[i].identificador == this.analisis2.instructions[j].identificador){
                            for(var k = 0; k < this.analisis.instructions[i].instrucciones.length; k++){
                            
                                if(this.analisis.instructions[i].instrucciones[k].tipoInstruccion == "metodo"){
                                    for(var l = 0; l < this.analisis2.instructions[j].instrucciones.length; l++){
                                        if(this.analisis2.instructions[j].instrucciones[l].tipoInstruccion=="metodo"){

                                            if(this.analisis.instructions[i].instrucciones[k].tipo.type == this.analisis2.instructions[j].instrucciones[l].tipo.type){
                                                if(this.analisis.instructions[i].instrucciones[k].parametros.length == this.analisis2.instructions[j].instrucciones[l].parametros.length){

                                                    var parametros:Parametro[] = []
                                                    for(var m = 0; m < this.analisis.instructions[i].instrucciones[k].parametros.length; m++){
    
                                                        if(this.analisis.instructions[i].instrucciones[k].parametros[m].tipo.type == this.analisis2.instructions[j].instrucciones[l].parametros[m].tipo.type){
                                                            iguales = true;
                                                            parametros.push(new Parametro(this.analisis.instructions[i].instrucciones[k].parametros[m].tipo.toString0(),this.analisis.instructions[i].instrucciones[k].parametros[m].identificador))
                                                        }else{
                                                            iguales = false;
                                                            break;
                                                        }
                                                    
                                                    }
        
                                                    if(!iguales){
                                                        console.log("distintos")

                                                    }else{
                                                        console.log("iguales")
                                                        this.listaMetodo.push(new copiaMetodo(this.analisis.instructions[i].instrucciones[k].tipo.toString0(), this.analisis2.instructions[j].instrucciones[l].identificador, this.analisis.instructions[i].identificador, parametros))
                                                    }
                                                }
                                            }
                               
                                 
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


    }

    copiaClase(){
        var metodosIguales = false;
        var claseCopiada = false;
        var numMetodosIguales = 0;
        var contadorA1 = 0;
        var contadorA2 = 0;
        
        for(var i = 0; i < this.analisis.instructions.length; i++){
            if(this.analisis.instructions[i].tipoInstruccion == "clase"){
                for(var j = 0; j < this.analisis.instructions[i].instrucciones.length; j++){
                    if(this.analisis.instructions[i].instrucciones[j].tipoInstruccion == "metodo"){
                        contadorA1++;
                    }
                }
            }
        }

        for(var i = 0; i < this.analisis2.instructions.length; i++){
            if(this.analisis2.instructions[i].tipoInstruccion == "clase"){
                for(var j = 0; j < this.analisis2.instructions[i].instrucciones.length; j++){
                    if(this.analisis2.instructions[i].instrucciones[j].tipoInstruccion == "metodo"){
                        contadorA2++;
                    }
                }
            }
        }

        if(contadorA1 == contadorA2){
            for(var i = 0; i < this.analisis.instructions.length; i++){
                if(this.analisis.instructions[i].tipoInstruccion == "clase"){
                    for(var j = 0; j <  this.analisis2.instructions.length; j++){
                        if(this.analisis2.instructions[j].tipoInstruccion == "clase"){
                            if(this.analisis.instructions[i].identificador == this.analisis2.instructions[j].identificador){
                                for(var k = 0; k < this.analisis.instructions[i].instrucciones.length; k++){
                                    metodosIguales = false;
                                    if(this.analisis.instructions[i].instrucciones[k].tipoInstruccion == "metodo"){
                                        for(var l = 0; l < this.analisis2.instructions[j].instrucciones.length; l++){
                                            if(this.analisis2.instructions[j].instrucciones[l].tipoInstruccion=="metodo"){
                                                
                                                if(this.analisis2.instructions[j].instrucciones[l].identificador == this.analisis.instructions[i].instrucciones[k].identificador){
                                                    numMetodosIguales++;
                                                    metodosIguales = true;
                                                    break;
                                                }
                                            }
                                        }
    
                                        if(!metodosIguales){
                                            console.log("NO HAY COPIA")
                                            //no hay copia
                                            return;
                                        }
           
                                    }
                               
                                }

                                if(numMetodosIguales == contadorA2){
                                    //hay copia
                                    console.log("HAY COPIA ")
                                    this.listaClase.push(new copiaClase(this.analisis.instructions[i].identificador, contadorA1 ))
                                    return;
                                }
                            }else{
                                console.log("NO HAY COPIA")
                                //no hay copia
                                return;
                            }
                        }
                    }
                }
            }

            console.log("NO HAY COPIA")
            //no hay copia
            return;

        }else{
            console.log("NO HAY COPIA")
            return;
            //no hay copia
        }
    
    }
}


const indexRoutes = new IndexRoutes();
export default indexRoutes.router;