//FORIN y FOROF
//Permite iterar elementos usando una sintaxis mas sencilla.

//Estructura:

//For in
//Trabaja sobre Objetos

for( var propiedad in objeto ) {            //Palabra reservada for + (Nueva variable con el nombre de la propiedad que quiero iterar) + palabra reservada "in" + NombreDelObjeto + {
    Codigo                                  //Codigo a ejecutar
};                                          //Cierre de codigo }

var persona = {                                 //
    nombre: 'Guille',                           //Declaro la variable, y
    edad: 23                                    //almaceno  un objeto literal
};                                              //

for (var dato in persona) {                     //Declaro la variable que representa cada propiedad del objeto + NombreDelObjeto
    console.log(dato, persona[dato]);           //Muestro por consola el dato (Nombre, edad), y lo que se almacena dentro de ese dato("Guille", 23)
};                                              //Cierro de codigo

//For off
//Trabaja sobre Arrays

for( var propiedad of objeto ) {            //Palabra reservada for + (Nueva variable con un nombre para referirnos al elemento del Array) + palabra reservada "of" + NombreDelArray + {
    Codigo                                  //Codigo a ejecutar
};                                          //Cierre de codigo }

var musicos = ["Charly", "Spinetta", "Fito"];       //Declaro la variable con un Array

for (var musico of musicos) {       //Declaro la variable que representa a los elementos del Array + NombreDelArray
    console.log(musico]);           //Muestro por consola cada elemento del Array.
};                                  //Cierro de codigo