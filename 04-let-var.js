'use strict'

// Pruebas con let y var


// prueba con var
var numero = 40;
console.log(numero);// valor 40

    if (true) {
        var numero = 50; 
        console.log(numero); // 50
    }
console.log(numero) // valor 40

// prueba con let
var texto = "Curso JS Carlos cea";
console.log(texto);
if (true) {
    let texto= "Curso Laravel 5";
    console.log(texto);
}

console.log(texto);