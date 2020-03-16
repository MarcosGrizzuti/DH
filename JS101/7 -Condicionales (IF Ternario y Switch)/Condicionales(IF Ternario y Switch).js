//CONDICIONALES (IF Ternario y Switch)
//Permite evaluar condiciones y realizar diferentes acciones segun el resultado de dichas evaluaciones. [Tienen el mismo objetivo que un condicional comun]

//Estructura:

//IF Ternario:
//Mismo objetivo que el condicional comun, solo que se escribe horizontal y no necesita las palabras reservadas como IF o Else

condicion ? codigo1 : codigo2                                   //Condicion a evaluar + "?" + Codigo si es verdadero + ":" + Codigo si es falso. Es obligatorio poner el codigo2, si queremos q no haga nada " "

4 > 10  ? 'El 4 es más grande' : 'El 10 es más grande'          //Ejemplo. En este caso ejecutaria "El 10 es mas grande"

//Switch
//Mismo objetivo que el condicional comun. Permite proponer muchos casos y bloques de ejecucion.

switch(condicion) {                                             //Palabra reservada switch + (condicion a evaluar) + {
    case nombre:                                                //Palabra reservada + NombreDelCaso + :
        Codigo que se ejecuta si nombre es verdadero            //Codigo a ejecutar si este caso es verdadero
        break;                                                  //Palabra reservada break - Indica que termina el codigo
    case nombre1:                                               //Palabra reservada + NombreDelCaso + :
        codigo que se ejecuta si nombre1 es verdadero           //Codigo a ejecutar si este caso es verdadero
        break;                                                  //Palabra reservada break - Indica que termina el codigo
    default:                                                    //En caso de que ninguno de los casos propuestos sea verdadero se utiliza la palabra reservada default + :
        codigo si ninguno de los casos es verdadero             //Codigo a ejecutar como ultima opcion
        break;                                                  //Palabra reservada break - Indica que termina el codigo
}                                                               //Cierre de codigo }

var fruta = Kiwi                                                //
switch (fruta) {                                                //
     case 'manzana':                                            //
        console.log('Qué rica es la manzana');                  //
        break;                                                  //
     case 'naranja':                                            //Ejemplo - En este caso retornaria "No conozco esa fruta"
        console.log('¡Me encanta!')                             //
        break;                                                  //
    default:                                                    //
        console.log('No conozco esa fruta')                     //
        break;                                                  //
}                                                               //