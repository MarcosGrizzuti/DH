//ARRAYS
//Permiten generar una coleccion de datos ordenados

//Estructura:

let miArray = [(Booleano, string, number), (Booleano, string, number), etc];        //Palabra reservada de una variable + NombreDeMiArray + "=" + "[" + (Booleano, string, number) + "]"
//Posiciones                0                           1               2           //La posicion siempre empieza en 0. El largo es 3.

miArray[Indice]         //Para llamar a un elemento, nombro al array y entre corchetes le pongo la posicion.

let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien'];           //Ejemplo
pelisFavoritas[2];                                                  //Muestra "Alien"

//.push()
//Permite agregar un elemento al final del array

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
numeros.push(6);                            //Agrego el 6 como ultimo elemento
console.log(numeros);                       //Muestro [1, 2, 3, 4, 5, 6]

//.pop()
//Permite sacar el ultimo elemento del array

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
numeros.pop();                              //Saca el ultimo elemento del array. No se pone nada como parametro
console.log(numeros);                       //Muestro [1, 2, 3, 4]

//.shift()
//Permite sacar el primer elemento del array

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
numeros.shift());                           //Saca el primer elemento del array. No se pone nada como parametro
console.log(numeros);                       //Muestro [2, 3, 4, 5]

//.unshift()
//Permite agregar un elemento al principio del array

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
numeros.unshift(3);                         //Agrego el 3 como primer elemento
console.log(numeros);                       //Muestro [3, 1, 2, 3, 4, 5, 6]

//.length

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
numeros.length;                             //
console.log(numeros);                       //Muestra 5

//.indexOf()
//Muestra la posicion del elemento buscado. Si el resultado es -1, el elemento buscado no existe.

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
console.log(numeros.indexOf(4));            //Muestra la posicion donde esta el 4, en este caso 3

//.lastindexOf()
//Muestra la posicion del elemento buscado, solo que empieza a buscar desde atras hacia adelante. Si el resultado es -1, el elemento buscado no existe.

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
console.log(numeros.lastindexOf(4));        //Muestra la posicion donde esta el 4, en este caso 1

//.join()
//Retorna en forma de string todos los elementos de un array, separado entre ","(si no paso nada como parametro).

let numeros = [1, 2, 3, 4, 5];              //Declaro mi array
console.log(numeros.join("-"));             //Muestra "1-2-3-4-5". En este caso esta separado con "-", porque eso le pase como parametro

//.map()
//Recibe una funcion como parametro. Recorre un Array y devuelve un nuevo array modificado.

let array = [Elemento, etc]                 //Declaro un Array
array.map(function(elemento){               //Aplico .map() en mi Array, y como parametro le paso una funcion, que recibe un elemento. Abro la funcion
    Codigo                                  //Escribo el codigo
    return                                  //Retorno el codigo
})                                          //Cierro codigo

var numeros = [2, 4, 6];                                        //Declaro una variable con un Array
var dobleNumeros = numeros.map(function(numero) {               //Declaro una variable, y declaro la funcion
    return numero * 2;                                          //Retorno el Array, multiplicado por 2
});                                                             //Cierro la funcion dentro de la variable
console.log(dobleNumeros);                                      //Muestra por consola [4,8,12]

//filter()
//Recibe una funcion como parametro. Recorre y filtra un array segun la condicion que exista en el callback, y devuelve un nuevo array

let array = [Elemento, etc]                 //Declaro un Array
array.filter(function(elemento){            //Aplico .filter() en mi Array, y como parametro le paso una funcion, que recibe un elemento. Abro la funcion
    Condicion                               //Escribo el codigo
    return                                  //Retorno el codigo
})                                          //Cierro codigo

var edades = [22, 8, 17, 14, 30];                       //Declaro una variable con un Array
var mayores = edades.filter(function(edad) {            //Declaro una variable y declaro la funcion
    return edad > 18;                                   //Retorna el Array, con los elementos que pasen la condicion
});                                                     //Cierro la funcion dentro de la variable
console.log(mayores);                                   //Muestra por consola [22, 30]

//reduce()
//Recibe una funcion como parametro. Recorre un array y devuelve un unico valor

let array = [Elemento, etc]                                 //Declaro un Array
array.reduce(function(acumulador, elemento) {               //Aplico .reduce() en mi Array, y como parametro le paso una funcion, que recibe un acumulador y un elemento. Abro la funcion
    Codigo                                                  //Escribo el codigo
    return                                                  //Retorno el codigo
});                                                         //Cierro el codigo

var numeros = [5, 7, 16];                                       //Declaro una variable con un Array
var suma = numeros.reduce(function(acumulador, numero) {        //Declaro una variable y declaro la funcion, que recibe como paramentro si o si un acumulador y un numero
    return acumulador + numero;                                 //Retorno el Array. Por cada iteracion, la suma se guarda en el acumulador, que luego se le suma el siguiente elemento del Array
});                                                             //Cierro la funcion
console.log(suma);                                              //Muestro por pantalla 28

//forEach()
//Itera sobre un Array, pasa una funcion como parametro, pero no retorna nada

let array = [Elemento, etc]                     //Declaro un Array
array.forEach(function(elemento) {              //Aplico .forEach() en mi Array, y como parametro le paso una funcion, que recibe un elemento como parametro, pero no retorna nada
    Codigo                                      //Escribo el codigo
});                                             //Cierro el codigo

var paises = ['Argentina', 'Brasil', 'Colombia'];           //Declaro una variable con un Array
paises.forEach(function(pais) {                             //Declaro una variable y declaro la funcion, que recibe como parametro un elemento
    console.log(pais);                                      //Imprime por pantalla cada elemento del Array
});                                                         //Cierra el codigo

