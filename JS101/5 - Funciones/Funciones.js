//OPERADORES
//Bloque de codigo que retorna un valor.

//Estructura:

function nombreDeLaFuncion(parametro, parametro2, etc) {         //Palabra reservada function + NombreDeLaFuncion + (cantidad x de parametros separado con ",") + {
    //Codigo                                                     //Codigo que queremos ejecutar
    //Etc                                                        //Se puede utilzar x cantidad de codigo dentro de una funcion
    return valorARetornar;                                       //Palabra reservada return + "ValorARetornar"
}                                                                //Cierro funcion con }

//Funciones Declaradas:
//Son aquellas que tienen la estructura basica, estan sueltas en el codigo

function hacerHelado(cantidad) {           //Utiliza la pabra reservada. Recibe "hacerHelado" como nombre y "(cantidad)" como parametro, en este caso un number.
    return '🍦'.repeat(cantidad);          //Retorna la cantidad de 🍦 que se haya pasado como numero en el parametro
}                                          //Cierre de la funcion

//Funciones Expresadas:
//Son aquellas que se asignan como valor a una variable. El nombre de la funcion sera el nombre de la variable.

let hacerSushi = function(cantidad) {       //Utiliza la palabra reservada let y function.
     return '🍣'.repeat(cantidad)          //Retorna un valor que se va a repetir el numero de veces que se pase como parametro.
}                                          //Cierre de la funcion
console.log(hacerSushi(5));                //Muestra por pantalla "holaholaholaholahola". Pido que muestre la funcion "hacerSushi" y le paso 5 como parametro.

//Scope Local:
//Es el alcance que tiene una variable. Se llama Scope Local a la variable que esta dentro de un bloque de codigo, y no es reconocida por fuera del mismo.

function hola() {                           //
    let saludo = 'Hola ¿qué tal?';          //En este caso, el let esta dentro del bloque de codigo. Si la quiero llamar
    return saludo;                          //desde afuera del bloque de codigo, con el console.log(saludo); la terminal
}                                           //me dara un error como: "saludo is not defined"
console.log(saludo);                        //

//Scope Global:
//Es el alcance que tiene una variable. Se llama Scope Global a la variable que esta por fuera de un bloque de codigo, pero tambien es reconocida por dentro del mismo.

let saludo = 'Hola ¿qué tal?';          //
function hola() {                       //En este caso, el Let esta por fuera del bloque de codigo, pero tambien la puedo llamar desde
    return saludo;                      //adentro de la funcion, y mostrarla por pantalla sin problema de error.
}                                       //
