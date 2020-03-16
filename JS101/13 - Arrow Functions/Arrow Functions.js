//ARROW FUNCTIONS
//Permite hacer funciones en forma horizontal

//Estructura:

function sumas (a, b) {         //
    return a + b;               //Funcion Basica
}                               //

(a, b) => a + b;                        //Arrow Function anonima. (Parametro/s) + "=>"(Reemplaza que el return. Indica q es una funcion) + "funcion a ejecutar"
let sumar = (a, b) => a + b;            //Arrow Function expresada.

let horaActual = () => {                                            //
    let fecha = new Date();                                         //Arrow Function con mas de un codigo. Cuando estas funciones llevan mas de un
    return fecha.getHours() + ':' + fecha.getMinutes();             //codigo, y se escribe el codigo. Luego se retorna con la palabra reservada return
}                                                                   //

let saludo = (hr) => {                          //
    if (hr <= 5) {                              //
      return 'No me jodas!!!';                  //
    } else if(hr >= 6 && hr <= 11) {            //
      return 'Buenos días!!!';                  //
    } else if(hr >= 12 && hr <= 18) {           //Arrow Function con cuerpo. En este caso esta expresado en la variable saludo.
      return 'Buenas tardes!!!';                //
    } else {                                    //
      return 'Buenas noches!!!';                //
    }                                           //
  };                                            //