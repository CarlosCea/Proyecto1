'use strict'

// Condicional IF
// Si A es Igual a B entonces haz algo


// var edad1 = 30;
// var edad2 = 12;
// // si pasa esto 
// if (edad1 > edad2) {
//    // ejecuta esto 
//    console.log("Edad 1 es mayor que edad 2")
// }else{
//     console.log("la edad 1 es menor que la edad 2 ");
// }

//Operadores relacionales
/*
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=

*/ 

// var edad = 12;
// var nombre = 'David Suarez';

// if(edad >= 18){
//     console.log(nombre+ " tiene "+edad+" años, es mayor de edad ");
//     if (edad <=33) {
//         console.log("todavia eres milenial");

//     }else if(edad >= 70){
//         console.log("Eres anciano")

//     }else{
//         console.log('ya no eres milenials');
//     }
// }else{
//     console.log(nombre+ " tiene "+edad+" años, es MENOR de edad ");
// }

/*
    Operadores 
    AND(Y): &&
    OR(O): ||
    Negacion: !
*/ 

var year = 2018;
if (year != 2016) {
    console.log("El año no es 2016, realmente es: " +year);
}
 // AND
if (year >= 2000 &&  year <= 2020 && year != 2018 ){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR

if (year == 2008 || year >= 2018 && year == 2028) {
    console.log("El año acaba en 8");
    
} else {
    console.log("Año NO registrado");
}