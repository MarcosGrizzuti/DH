//CONVERSION DE TIPOS DE DATOS
//Alterar el tipo de dato mediante funciones

//typeof:
//Permite saber el tipo de dato que esta almacenado en una variable

var nombre = "Marcos";          //
console.log(typeof nombre)      //Devuelve "String"
var llueve = true;              //
console.log(typeof llueve)      //Devuelve "Boolean"
var edad = 23                   //
console.log(typeof edad)        //Devuelve "Number"
var resultado;                  //
console.log(typeof resultado)   //Devuelve "undefined"

//Number()
//Convierte un string de numeros en un numero

Number("32");            //Retorna 32
Number("1.4");          //Retorna 1.4
Number("-1.53");        //Retorna -1.53
Number("100 años");     //Retorna NaN
Number("4.Yl");         //Retorna NaN

//parseInt()
//Convierte un string en numero entero

Number("32");            //Retorna 12
Number("   3    ");      //Retorna 1.4
Number("18,6");          //Retorna 19
Number("-1.53");         //Retorna -1.53
Number("n384");          //Retorna NaN
Number("4kl53");         //Retorna 4
Number("93-Fh-32");      //Retorna 93

//parseFloat()
//Convierte un string en numeros con decimales

parseFloat('12.6');                 // devuelve 12.6
parseFloat('  6.7  ');              // devuelve 6.7
parseFloat('11.9e');                // devuelve 11.9
parseFloat('-4.32');                // devuelve -4.32
parseFloat('9,57');                 // devuelve 9 - JS no usa ","
parseFloat('56.7-F-25.8');          //devuelve 56.7
parseFloat('78.74%');               // devuelve 78.74
parseFloat('resultado: 79.3%');     // devuelve NaN
parseFloat('*42.3');                // devuelve NaN

//String()
//Convierte un valor en un string

String(3005);                   // devuelve '3005'
String(true);                   // devuelve 'true'
String(['Juan', 'María']);      // devuelve 'Juan, María'
String({nombre: 'Rosita'});     // devuelve "[object object]" (No convierte Objetos)

var numeroA = 5;                        //Establezco una variable
var numeroB = 12;                       //Establezco una variable
numeroA + numeroB;                      // suma los números y devuelve 17
String(numeroA) + String(numeroB);      // convierte a strings, concatena y devuelve '512'



