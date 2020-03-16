//DATE
//Objeto para generar fechas y trabajar con ellas

//Estructura:

var miFecha = new Date();           //Creo una variable + NombreDeLaVariable + "=" + palabra reservada new + palabra reservada Date()

//.getDate()
//Retorna el numero de dia del mes

var diaEnElQueEscriboEsto = miFecha.getDate();          //Declaro una variable y le pido que almacene el numero de dia en el que escribo esto
console.log(diaEnElQueEscriboEsto)                      //Muestra por pantalla 12

//.getMonth()
//Retorna el numero de mes de una fecha

var mesDeMiFecha = miFecha.getMonth();          //Declaro una variable y le pido que almacene el numero de mes en el que escribo esto
console.log(mesDeMiFecha);                      //Muestra por pantalla 2 (Marzo). Los numeros de meses van desde Enero(0) hasta Diciembre (11)

//.getday()
//Retorna el numero de dia de la semana

var diaSemanaDeMiFecha = miFecha.getDay();          //Declaro una variable y le pido que almacene el numero de dia de la semana en el que escribo esto
console.log(diaSemanaDeMiFecha);                    //Muestra por pantalla 4 (Jueves). Los numeros de dias van desde el Domingo(0) hasta el Lunes(7)

//.getFullYear()
//Retorna el año completo de una fecha

var anioDeMiFecha = miFecha.getFullYear();          //Declaro una variable y le pido que alamcene el numero del año en el que escribo esto
console.log(anioDeMiFecha);                         //Muestra por pantalla 2020.

var fechaDeCumpleanos = new Date(1998, 1, 2);           //En esta variable se alamacena la fecha de mi cumpleaños. Como parametro se pasa primero el Año, despues Mes, y por ultimo Dia
fechaDeCumpleanos.getFullYear()                         //Devuelve 1998
fechaDeCumpleanos.getMonth()                            //Devuelve 1
fechaDeCumpleanos.getDate()                             //Devuelve 2

var cumpleanosCliente = new Date();
cumpleanosCliente.setFullYear(2005);
cumpleanosCliente.setMonth(11);
cumpleanosCliente.setDay(5);