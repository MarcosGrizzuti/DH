//CONDICIONALES
//Permite evaluar condiciones y realizar diferentes acciones segun el resultado de dichas evaluaciones

//Estructura:

if (condición) {            //Palabra reservada if + (condicion a evaluar) + {
    // código;              //Codigo a ejecutar si la condicion es verdadera
} else {                    //Cierre de condicion verdadera "}" + palabra reservada "elise" + apertura de condicion falsa
    // código;              //Codigo a ejecutar si la condicion es falsa
}                           //Cierre de condicion falsa

//Condicional con Else:
//Si la condicion es verdadera, hace esto, sino, hace esto otro.

if (5 == 5) {                                                                                              //
    console.log("Si estas viendo esto, quiere decir que la condicion a evaluar es verdadera");             //
} else {                                                                                                   // Ejemplo de condicion Baisca
    console.log("Si estas viendo esto, quiere decir que la condicion a evaluar es falsa");                 //
}                                                                                                          //

//Condicional con Else If:
//Si la condicion es verdadera, hace eso, sino, evalua esto. En base a esta evaluacion, ejecuta esto si es verdadero, y sino esto otro si es falsa.

var edad = 19;
var acceso = "";

if (edad < 18) {                                                                                          //Se evalua la condicion
    acceso = "No podes pasar";                                                                            //Si es verdadera se ejucta el codigo.
} else if (edad >= 16 && edad <= 18) {                                                                    //Si la condicion es falsa, se va a evaluar esta nueva condicion
    acceso = "Podes pasar si estas acompañado de un mayor";                                               //Si la segunda condicion es verdadera, se va a ejecutar el siguiente codigo
} else {                                                                                                  //Si es falsa,
    acceso = "Podes pasar"                                                                                //Se va a ejecutar este otro codigo
}                                                                                                         //Cierre de condicional