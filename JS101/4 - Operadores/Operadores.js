
// OPERADORES
// Permiten manipular valores, realizar operaciones y comparar sus valores.

//Tipos de Operadores:

//Asignacion:
//Permiten asignar valores (por lo general a las variables)

var edad = 19;          //Establece que la edad es 19 mediante "="
console.log(edad);      //Muestra por pantalla 19

//Aritmeticos:
//Permiten hacer operaciones matematicas

var suma = 10 + 10;                  //Suma "+"
var resta = 10 - 10;                 //Resta "-"
var multiplicacion = 10 * 10;        //Multiplicacion "*"
var division = 10 / 10;              //Division "/"
    10++                             //Incrementa "++" Es lo mismo que haces 10 + 1
    10--                             //Decrementa "--" Es lo mismo que hacer 10 - 1
var modulo = 4%2                     //Devuelve el resto de dividir 4/2 En este caso 0
var modulo2 = 4%3                    //Devuelve el resto de dividir 4/3 En este caso 1

//Comparacion Simple:
//Compara 2 valores y devuelven true or false

    10 == 15        //¿10 = 15? False
    10 != 15        //¿10 ≠ 15? True
    15 > 15         //¿15 mayor 15? False
    15 >= 15        //¿15 mayor o igual 15? True
    10 < 15         //¿10 menor 15? True
    10 <= 15        //¿10 menor o igual 15? True

//Comparacion Estricta:
//Compara 2 valores y tambien el tipo de dato y retorna true or false

    10 === "10"     //¿10 === "10"? False
    10 !==  10      //¿10 ≠≠≠ 10? False
    10 !== "10"     //¿10 ≠≠≠ "10"? True

//Logicos:
//Compara booleanos y devuelve un booleano

    (10 > 15) && (10 != 20)         //¿10 mayor 15 y 10 distinto 20? False
    (12 % 4 == 0) && (12 != 24)     //¿12%4 --> 0 igual 0 y 12 distinto 24? True
    (10 > 15) || (10 != 20)         //¿10 mayor 15 o 10 distinto a 20? True
    (12 % 4 == 0) && (12 != 24)     //¿12%4 --> 0 estrictamente igual 0 o 12 distinto de 24? True
    !false                          //Negacion del Falso --> True
    !(10 > 15)                      //Negacion de ¿10 mayor 15?(NO) [Negacion del NO] --> True

//Concatenacion:
//Une cadena de Strings, y devuelve cadena de texto.

var nombre = "Marcos";                      //String de una variable
var apellido = "Grizzuti";                  //String de otra variable
console.log(nombre + " " + apellido)        //Concatenacion de Strings. Devuelve "Marcos Grizzuti"

var fila = "M";                             //String de una variable
var asiento = 7;                            //Number de una variable
console.log(fila + " " + asiento)           //Concatenacion entre string y number. Devuelve un string "M7"