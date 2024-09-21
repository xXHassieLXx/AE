"use strict";
//Tupla 
let tupla = ["Lucas", 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let ourTuple = ["Lucas", 23, true];
console.log("Nombre:", ourTuple[0]);
console.log("Edad:", ourTuple[1]);
//Ternario 
let estadoCivil = ourTuple[2] ? "Casado" : "Soltero";
console.log("Estado:", estadoCivil);
let ourTuple2 = [23, false, "Lucas"];
ourTuple2 = [23, false, "Lucas"];
console.log(ourTuple2);
const ourReadonlyTuple = [5, false, "Lucas"];
// ourReadonlyTuple.push("Cadena");//Error
// ourReadonlyTuple[0] = 30;
console.log("Nombre", ourReadonlyTuple[2]);
const graph = [55.2, 41.3];
//Destructuracion de una variable 
const person = {
    firstName: "Juan",
    lastName: "Perez",
    age: 20
};
// let nombreX: string = person.firstName; 
let { firstName, lastName, age } = person;
console.log(firstName, lastName, age);
// // Reto 
// // Usando TS y desestructuracion de variables hay que 
// // generar una serie de fibonaccci se 
function fibonacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
const n = 25;
const fibonacci = fibonacciSeries(n);
console.log(fibonacci);
