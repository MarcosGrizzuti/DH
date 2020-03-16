//CLOSURES
//Funciones que vienen dentro de funciones

//Estructura:
//Las funciones que estan dentro de la funcion general tienen acceso a los parametros de la funcion general

function contenedora() {            //Palabra reservada function + NombreDeLaFuncion + (Parametro/s) + {
    function interna() {            //Palabra reservada function + NombreDeLaFuncion2 + (Parametro/s) + {
        Codigo                      //Codigo que ejecuta la segunda funcion
    }                               //Cierre de bloque de la segunda funcion }
    Codigo                          //Codigo de la funcion general o primera funcion
}                                   //Cierre de bloque de la funcion general

function saludoPersonalizado(nombre) {                  //Defino la funcion general, en este caso con un parametro.
    let saludoGenerico = 'Hola';                        //Defino la variable con scope local y en este caso le asigno "Hola"
    function saludar() {                                //Defino mi closure (segunda funcion), en este caso con nombre "saludar". No recibe parametro
        return saludoGenerico + ' ' + nombre;           //Retorna saludoGenerico y nombre, porque comparte parametros con la funcion general. Tiene acceso a ellos.
    }                                                   //Cierro bloque del closure
    return saludar();                                   //Retorno, desde la funcion global, el closure
}

function agregar() {                                    //
    var contador = 0;                                   //
    function plus() {contador += 1;}                    //Ejemplo
    plus();                                             //
    return contador;                                    //
}                                                       //