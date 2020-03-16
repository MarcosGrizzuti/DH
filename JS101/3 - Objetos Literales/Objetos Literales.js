
// OBJETOS LITERALES

// Estructura:

var nombre = {                          //Palabra reservada var / let / const + NombreDeLaVariable + "=" +  {}
    nombreObjeto1: datoAAlmacenar1,     //NombrePropiedad + ":" + DatoAAlmacenar(String, Boolean, Number, Funcion, Array, etc) + ","
   etc                                  //Infinidad de veces
};                                      //Cierre de la propiedad


var tenista = {                                                    //
    nombre: 'Roger',                                               //
    apellido: 'Federer',                                           //
     saludar: function() { return '¡Hola! Me llamo Roger';         // Ejemplo.
     }                                                             //
};                                                                 //
console.log(tenista.saludar())                                     //


function Auto(marca, modelo) {                  //Creo una funcion x que recibe 2 parametros. Cuando definimos el nombre de Objetos se usa Mayuscula.
     this.marca = marca;                        //Uso this.NombreDelParametro para nombrar al objeto.
     this.modelo = modelo;                      //Uso this.NombreDelParametro para nombrar al objeto.
};                                              //Cierro Funcion
console.log(Auto());                            //Muestro funcion por Pantalla

var miAuto = new Auto("Ford", "Focus");         //Creo una variable + "=" + new(Esto instanciando la funcion dentro de mi variable) + NombreFuncion + los parametros de la funcion.
console.log(miAuto);                            //Muestro la variable por pantalla. [Se veria asi: auto { marca: 'Ford', modelo: 'Focus' }]

function Computadora(procesador, ram, disco) {                //
    this.procesador = procesador;                             //
    this.ram = ram;                                           //
    this.disco = disco;                                       //
};                                                            // Ejemplo.
                                                              //
var miPc = new Computadora("Ryzen 3", "8GB", "WD 1TB");       //
console.log(miPc);                                            //