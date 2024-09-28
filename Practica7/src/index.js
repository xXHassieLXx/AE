"use strict";
function sum(a, b) {
    return a + b;
}
let resultado = sum(2, 3);
console.log(resultado);
const fSum = sum(5, 80);
console.log(fSum);
// Funciones de orden superior
// Funciones arrow
const sumArrow = (a, b) => {
    return a + b;
};
// Funcion anonima
let functionAnonima = function () {
    console.log("Hola mundo");
};
functionAnonima();
// Funcion arrow
let functionAnonimaArrow = () => {
    console.log("Hola mundo");
};
functionAnonimaArrow();
function saludo(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludo("Juan"));
const saludoArrow = (nombre) => "Hola" + nombre;
saludoArrow("Carlos");
function advertencia() {
    console.log("Cuidado");
}
advertencia();
function operacion(a, b, operacion) {
    if (operacion == 'suma') {
        return a + b;
    }
    else {
        return a - b;
    }
}
console.log(operacion(5, 16, 'suma'));
console.log(operacion(50, 10, 'resta'));
