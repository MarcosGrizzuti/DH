//CICLOS WHILE Y DO WHILE
//Permiten repetir codigo hasta una cantidad de veces o mientras se cumpla alguna condicion [Mismo objetivo que el for comun]

//Estructura:

//Ciclo While:

while (condicion) {                                             //Palabra reservada while + (condicion a evaluar) + {
    Codigo a ejecutar si la condicion es verdadera;             //Codigo a ejecutar si la condicion es verdadera
}                                                               //Cierre de codigo }

var contador = 0;                                   //Variable que empieza en 0
while (contador <= 4) {                             //La condicion estableces que el codigo se ejecute hasta que el contador sera menor o igual a 4
    contador++;                                     //Por cada intineracion que aumente 1
    console.log('Contador: ' + contador);           //Codigo a ejecutar
}                                                   //Cierre del bloque

//Ciclo Do While:

do {                             //Palabra reservada do + {
    Codigo                       //Codigo que se ejecuta al menos 1 vez si o si
    Intinerador                  //Intinerador
} while (condicion)              //Cierre del bloque } + palabra reservada while + (condicion a evaluar)

var diaSemana = 1;                                                //
do {                                                              //
    console.log('Día de la semana N° ' + diaSemana);              //Ejemplo
    diaSemana++;                                                  //
} while (diaSemana <= 7)                                          //