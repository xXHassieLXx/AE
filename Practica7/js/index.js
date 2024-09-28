function sum(a, b) {
    return a + b;
}
var resultado = sum(2, 3);
console.log(resultado);
var fSum = sum(5, 80);
console.log(fSum);
// Funciones de orden superior
// Funciones arrow
var sumArrow = function (a, b) {
    return a + b;
};
// Funcion anonima
var functionAnonima = function () {
    console.log("Hola mundo");
};
functionAnonima();
// Funcion arrow
var functionAnonimaArrow = function () {
    console.log("Hola mundo");
};
functionAnonimaArrow();
function saludo(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludo("Juan"));
var saludoArrow = function (nombre) { return "Hola" + nombre; };
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
