

%{
 
    const {Type, types} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Type.js');
    const {Primitivo} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Primitivo.js');
    const {Operaciones} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Operaciones.js');
    const {Identificador} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Id.js');
    const{Comparacion} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Comparacion.js');
    const {Asignacion} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Asignacion.js')
    const {Tree} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\tree.js');
    const {Importar} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\import.js')
    const {Clase} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Clase.js')
    const {OpLogic} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\OpLogic.js')
    const {Declaracion} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Declaracion.js')
    const {Metodo} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Metodo.js')
    const {While} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\While.js')
    const {DoWhile} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\DoWhile.js')
    const {For} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\For.js')
    const {Print} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Print.js')
    const {If} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\If.js')
    const {Switch} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Switch.js')
    const {Case} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Case.js')
    const {LlamadaMetodo} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\LlamadaMetodo.js')
    const {Exception} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\Exception.js')
    const {Comentario} = require('C:\\Users\\gerso\\Desktop\\Proyecto2OLC1\\server\\build\\clases\\comentarios.js')


    



%}

%lex
%options case-insensitive
numero [0-9]+;
decimal {numero}("."{numero});
cadena (\"[^"]*\");
caracter ("'")[^"]("'");
comentario("/""/")("/")*(.|{identificador}|{numero}|{decimal}|{cadena})
comentarioML "/*"(.|\n|\r)*?"*/"
identificador ([a-zA-Z_])[a-zA-Z0-9_]*;


%%

\s+                   /* skip whitespace */
{cadena}            return 'cadena';
{caracter}          return 'caracter';
{comentario}        return 'comentario';
{comentarioML}      return 'comentarioML';
"++"                return '++';
"--"                return '--';
"=="                return '=='
"<="                return '<='
">="                return '>='
"!="                return '!='
"<"                 return '<'
">"                 return '>'
"&&"                return '&&'
"||"                return '||'
"!"                 return '!'
"*"                 return '*'
"/"                 return '/'
"%"                 return '%'
";"                 return ';'
"-"                 return '-'
"+"                 return '+'
"*"                 return '*'
"{"                 return '{'
"}"                 return '}'
"("                 return '('
")"                 return ')'
";"                 return ';'
"="                 return '='
","                 return ','
":"                 return ':'
"."                 return '.'
"^"                 return '^'
"void"              return 'void'
"return"            return 'return'
"System"            return 'System'
"out"               return 'out'
"print"             return 'print'
"println"           return 'println'
"break"             return 'break'
"continue"          return 'continue'
"do"                return 'do'
"while"             return 'while'
"for"               return 'for'
"default"           return 'default'
"switch"            return 'switch'
"case"              return 'case'
"if"                return 'if'
"else"              return 'else'
"true"              return 'true'
"false"             return 'false'
"import"            return 'import'
"class"             return 'class'
"int"               return 'int';
"char"              return 'char';
"double"            return 'double';
"boolean"           return 'boolean';
"String"            return 'String';
{identificador}     return 'identificador';
{numero}            return 'numero';
{decimal}           return 'decimal' 
.                   return 'Error Lexico'
<<EOF>>               return 'EOF';

/lex
%left '||'
%left '&&'
%left '==', '!='
%left '>=', '<=', '<', '>'
%left '+', '-'
%left '('
%left '='
%left '*', '/'
%left '^'
%left '%'
%right '!'
%left UMENOS

%start INICIO


%%


INICIO : CLASE EOF {$$ = new Tree($1); return $$;}
;



ASIGNACION : 'identificador' '=' EXPRECION ';' {$$ = new Asignacion($1, $3, _$.first_line, _$.first_column);}
            ;
COMENTARIO: 'comentario'{ $$ = new Comentario($1, _$.first_line, _$.first_column); }
        |'comentarioML' { $$ = new Comentario($1, _$.first_line, _$.first_column); }
        ;
CONDICION:EXPNUM '>' EXPNUM	 { $$ = new Comparacion($1, $3, '>', _$.first_line, _$.first_column); }
        | EXPNUM  '<' EXPNUM	 { $$ = new Comparacion($1, $3, '<', _$.first_line, _$.first_column); }
        | EXPNUM '>=' EXPNUM	 { $$ = new Comparacion($1, $3, '>=', _$.first_line, _$.first_column); }
        | EXPNUM '<=' EXPNUM	 { $$ = new Comparacion($1, $3, '<=', _$.first_line, _$.first_column); }
        | EXPNUM '==' EXPNUM	 { $$ = new Comparacion($1, $3, '==', _$.first_line, _$.first_column); }
        | EXPNUM '!=' EXPNUM	 { $$ = new Comparacion($1, $3, '!=', _$.first_line, _$.first_column); }		
        | 'true'                 { $$ = new Primitivo(new Type(types.BOOLEAN), true, _$.first_line, _$.first_column); }
        | 'false'               { $$ = new Primitivo(new Type(types.BOOLEAN), false, _$.first_line, _$.first_column); }
        ;

CASE :'case'  EXPRECION ':' SENTENCIASREC  {$$ = new Case('case', $2, $4)}
     |'case'  EXPRECION ':' SENTENCIASREC 'break' ';'{$$ = new Case('case', $2, $4)}
     | 'default' ':' SENTENCIASREC {$$ = new Case('default', null, $3)}
     | 'default' ':' SENTENCIASREC 'break' ';'{$$ = new Case('default', null, $3)}

    ;

DECASIG: DECLARACIONVAR {$$ = $1}
        |ASIGNACION {$$ = $1}
        ;

DECLARACIONVAR: TIPO 'identificador' LISTAID {$$ = new Declaracion($1, $2, $3,  _$.first_line, _$.first_column)}
            ;

DOWHILE : 'do' '{' SENTENCIASITERATIVASREC '}' 'while' '(' EXPLOGIC ')' ';' {$$ = new DoWhile($7, $3);}
        ;

ELSEIF: '{' SENTENCIASREC '}' { $$ = $2}
        |IF {$$ = $1}
        ;


							

EXPLOGIC
	: CONDICION '&&' CONDICION      {$$ = new OpLogic($1, $3, '&&', _$.first_line, _$.first_column); }
	| CONDICION '||' CONDICION 	{ $$ = new OpLogic($1, $3, '||', _$.first_line, _$.first_column); }	
	| '!' CONDICION			{ $$ = new OpLogic($1, $3, '!', _$.first_line, _$.first_column); }				
	| CONDICION		        {$$ = $1}		
;
EXPNUM : '-' EXPNUM %prec UMENOS	{ $$ = new Operaciones($1, null, '-', _$.first_line, _$.first_column); }
        | EXPNUM '+' EXPNUM		{ $$ = new Operaciones($1, $3, '+', _$.first_line, _$.first_column); }	
	| EXPNUM '-' EXPNUM		{ $$ = new Operaciones($1, $3, '-', _$.first_line, _$.first_column); }
	| EXPNUM '*' EXPNUM		{ $$ = new Operaciones($1, $3, '*', _$.first_line, _$.first_column); }
	| EXPNUM '/' EXPNUM	        { $$ = new Operaciones($1, $3, '/', _$.first_line, _$.first_column); }
        | EXPNUM '^' EXPNUM	        { $$ = new Operaciones($1, $3, '^', _$.first_line, _$.first_column); }
        | EXPNUM '%' EXPNUM             { $$ = new Operaciones($1, $3, '%', _$.first_line, _$.first_column); }
	| '(' EXPNUM ')'		{ $$ = $2; }		
	| 'numero'		        { $$ = new Primitivo(new Type(types.INT), Number($1), _$.first_line, _$.first_column); }						
	| 'decimal'	                { $$ = new Primitivo(new Type(types.DOUBLE), Number($1), _$.first_line, _$.first_column); }
        |'cadena' 			{ $$ = new Primitivo(new Type(types.STRING), $1, _$.first_line, _$.first_column); }
        |'caracter'			{ $$ = new Primitivo(new Type(types.CHAR), Number($1), _$.first_line, _$.first_column); }	
	| 'identificador'               { $$ = new Identificador($1, _$.first_line, _$.first_column); }
        |LLAMADAMETODO                  
    ;

EXPRECION: EXPNUM {$$ = $1}
        |EXPLOGIC {$$ = $1}
        ;

FOR : 'for' '(' DECASIG  EXPLOGIC ';' INCDEC ')' '{' SENTENCIASITERATIVASREC '}' {$$ = new For($3, $4, $6, $9, _$.first_line, _$.first_column )}
;
IF: 'if' '(' EXPLOGIC ')' '{' SENTENCIASREC '}'  {$$ = new If($3, $6, [], _$.first_line, _$.first_column);}
    |'if' '(' EXPLOGIC ')' '{' SENTENCIASREC '}' 'else'  '{' SENTENCIASREC '}' {$$ = new If($3, $6, $10, _$.first_line, _$.first_column);}
    |'if' '(' EXPLOGIC ')' '{' SENTENCIASREC '}' 'else'  IF {$$ = new If($3, $6, [$9], _$.first_line, _$.first_column);}
    ;
    
INCDEC: 'identificador' '++' {$$ = new Asignacion($1, new Operaciones(new Identificador($1, _$.first_line, _$.first_column),new Primitivo(new Type(types.INT), Number(1), _$.first_line, _$.first_column), '+', _$.first_line, _$.first_column),_$.first_line, _$.first_column)}
        |'identificador' '--'{$$ = new Asignacion($1, new Operaciones(new Identificador($1, _$.first_line, _$.first_column),new Primitivo(new Type(types.INT), Number(1), _$.first_line, _$.first_column), '-', _$.first_line, _$.first_column),_$.first_line, _$.first_column)}
        |EXPNUM {$$ = $1}
        ;

INTERIORCLASE: INTERIORCLASE  INTERIORCLASE2 { $$ = $1; $$.push($2); }
            | INTERIORCLASE2 {$$ = [$1];}
    
            ;

INTERIORCLASE2 : METODO {$$ = $1}
            |DECLARACIONVAR {$$ = $1}
            ;

INTERIORSWITCH: INTERIORSWITCH  CASE { $$ = $1; $$.push($2)}
            |  CASE {$$ = [$1]}
            ;
        

CLASE: CLASE IMPORTCLASS { $$ = $1; $$.push($2); }
       |IMPORTCLASS {$$ = [$1];}
       ;

IMPORTCLASS: 'class' 'identificador' '{' INTERIORCLASE '}' {$$ = new Clase($2, $4, _$.first_line, _$.first_column)}
        | 'import' 'identificador' ';' {$$ = new Importar($2, _$.first_line, _$.first_column)}
        |error { $$ = new Exception('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column)}
        |COMENTARIO {$$ = $1}
         ;


LISTAEXPRECIONES: EXPRECION ',' LISTAEXPRECIONES {$$ = $3; $$.push($1)}
               |EXPRECION ')' {$$ = [$1]}
               |')'{$$ = []}
               ; 


LISTAID: ',' 'identificador' LISTAID{$$ = null}
        |';' {$$ = null}
        |'=' EXPRECION ';'{$$ = $2}
        ;



LLAMADAMETODO : 'identificador' '(' LISTAEXPRECIONES  {$$ = new LlamadaMetodo($1, $3, _$.first_line, _$.first_column)}
;
METODO: TIPO 'identificador' '(' PARAMETROS ')' '{' SENTENCIASREC '}' {$$ = new Metodo($1, $2, $4, $7, _$.first_line, _$.first_column)}
    ;

PARAMETROS: TIPO 'identificador' ',' PARAMETROS  {$$ = $4; $$.push(new Declaracion($1, $2, null,  _$.first_line, _$.first_column));}
        |TIPO 'identificador' {$$ = [new Declaracion($1, $2, null,  _$.first_line, _$.first_column)]} 
        |//epsilon {$$ = []}
        ;
        

PRINT: 'System' '.' 'out' '.' 'print' '(' EXPNUM')'';' {$$ = new Print($7,  _$.first_line, _$.first_column )}
        ;

SENTENCIASREC : SENTENCIASREC SENTENCIAS {$$ = $1; $$.push($2)}
            |SENTENCIAS {$$ = [$1]}
            ;

SENTENCIASITERATIVASREC: SENTENCIASITERATIVASREC SENTENCIASITERATIVAS {$$ = $1; $$.push($2)}
                        |SENTENCIASITERATIVAS {$$ = [$1]}
                        ;

SENTENCIASITERATIVAS : DECLARACIONVAR {$$ = $1}
        | ASIGNACION {$$ = $1}
        |PRINT{$$ = $1}
        |IF {$$ = $1}
        |WHILE {$$ = $1}
        |SWITCH {$$ = $1}
        |DOWHILE{$$ = $1}
        |FOR{$$ = $1}
        |'break' ';'
        |'continue' ';' 
        |COMENTARIO {$$ = $1}
        ;

SENTENCIAS: DECLARACIONVAR {$$ = $1}
        | ASIGNACION {$$ = $1}
        |PRINT {$$ = $1}
        |IF  {$$ = $1}
        |WHILE {$$ = $1}
        |SWITCH {$$ = $1}
        |DOWHILE {$$ = $1}
        |FOR {$$ = $1}
        |LLAMADAMETODO ';'{$$ = $1}
        |'return' EXPRECION ';' 
        |COMENTARIO {$$ = $1}
        ;
SWITCH : 'switch' '(' EXPRECION ')' '{' INTERIORSWITCH '}' {$$ = new Switch($3, $6,  _$.first_line, _$.first_column )}
;
TIPO: 'int' {$$ = new Type(types.INT);}
    |'boolean' {$$ = new Type(types.BOOLEAN);}
    |'char'{$$ = new Type(types.CHAR);}
    |'String'{$$ = new Type(types.STRING);}
    |'double'{$$ = new Type(types.DOUBLE);}
    |'void'{$$ = new Type(types.VOID);}
    ;



WHILE: 'while' '(' EXPLOGIC')' '{' SENTENCIASITERATIVASREC '}' {$$ = new While($3, $6,  _$.first_line, _$.first_column );}
;


