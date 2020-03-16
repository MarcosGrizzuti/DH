//JSON
//Formato de texto utilizado para el intercambio de datos entre distintos sistemas

//Texto JSON:

{                                   //
    "texto": "Mi texto",            //
    "numero": 16,                   //Ejemplo de un texto JSON. Cadena de texto
    "array": ["uno", "dos"],        //
    "booleano": true                //
}                                   //

//Texto JS:

{                                   //
    texto: 'Mi texto',              //
    numero: 16,                     //
    array: ['uno', 'dos'],          //Ejemplo de un texto JS (Objeto literal).
    booleano: true,                 //
    metodo(): {return '¡Hola!'},    //
}                                   //

//JSON.parse()
//Convierte un texto JSON a JS - Rescibe una cadena de texto y lo convierte en objeto literal.

let datosJson = '{"club": "Independiente", "barrio": "Avellaneda"}';            //Archivo JSON - Linea de texto
let datosConvertidos = JSON.parse(datosJson);                                   //Convierte el archivo JSON a JS dentro de una variable
console.log(datosConvertidos);                                                  //Muestra por consola los datos convertidos

// {                                                                            //
// club: 'Independiente',                                                       //Asi se veria el archivo
// barrio: 'Avellaneda'                                                         //JS por consola
// }                                                                            //

//JSON.stringify()
//Convierte un JS a texto JSON - Recibe un objeto literal y lo convierte en una cadena de texto.

let objetoLiteral = { nombre: 'Carla', pais: 'Argentina' };         //Archivo JS - Objeto literal
let datosConvertidos = JSON.stringify(datosObjeto);                 //Convierte el archivo JS a JSON dentro de una variable
console.log(datosConvertidos);                                      //Muestra por consola los datos convertidos

//'{ "nombre": "Carla", "pais": "Argentina" }'                      //Asi se veria el archivo JSON por consola
