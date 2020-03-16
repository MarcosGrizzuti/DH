//METODOS DE STRINGS
//Metodos y propiedades para trabajar con String

//.length:
//Retorna la cantidad total de caracteres del string (Incluye espacios)

var miSerie = "The Witcher";            //Establezco una variable con un string
miSerie.length;                         //Uso el .length - Retorna 11

var arrayDeNombre = ["Tony", "Gonza", "Zeiden"];           //Establezco una variable con un string (Array en este caso)
arrayDeNombre.length;                                      //Uso .length - Retorna 3

//.indexOf("palabraABuscar"):
//Retorna la posicion donde se encuentra la palabra

var saludo = "¡Hola! Estamos programando";          //Establezco una variable con un string
saludo.indexOf("Estamos");                          //Uso .length - Retorna 7
saludo.indexOf("vamos");                            //Uso .length - Retorna -1 (La palabra "vamos" no esta en la variable)
saludo.indexOf("o");                                //Uso .length - Retorna 2 (Encuentra la primera "o" en el string)

//.trim()
//Elimina los espacios que esten al principio y al final del string

var nombreCompleto = "     Marcos Grizzuti     ";         //Establezco una variable con un string que tenga espacios
nombreCompleto.trim();                                    //Esto retornaria "Marcos Grizzuti" (Sin espacios)

var nombreCompleto2 = "  Marcos   Grizzuti   ";           //Establezco una variable con un string que tenga espacios
nombreCompleto2.trim();                                   //Esto retornaria "Marcos    Grizzuti" (Los espacios del medio no se eliminan)

//.split()
//Divide un string en varios strings separados, dentro de un Array

var cancion = "And bingo was his name, oh!"             //Establezco una variable con un string
cancion.split(" ")                                      //Esto retornaria ["And", "bingo", "was", "his", "name", ",", "oh!"]

//.replace()
//Reemplaza una parte de un string por otra

var frase = "Aguante Phyton";                   //Establezco una variable con un string
frase.replace("Phyton, JavaScript");            //Esto retornaria "Aguante JavaScript"
frase.replace("Phy", "JS");                     //Esto retornaria "JSton"


