function sum(a:number,b:number):number {
    return a + b;
}

let resultado = sum(2,3);
console.log(resultado);

const fSum = sum(5,80);
console.log(fSum);

// Funciones de orden superior

// Funciones arrow

const sumArrow = (a:number,b:number):number => {
    return a + b;
}

// Funcion anonima

let functionAnonima = function() {
    console.log("Hola mundo");
}
functionAnonima();

// Funcion arrow
let functionAnonimaArrow = () => {
    console.log("Hola mundo");
}
functionAnonimaArrow();

function saludo(nombre:string):string {
    return `Hola ${nombre}`;
}

console.log(saludo("Juan"));

const saludoArrow = (nombre:string):string => "Hola" + nombre;
saludoArrow("Carlos");

function advertencia():void {
    console.log("Cuidado");
}

advertencia();

// function error(mensaje:string):never {
//     let mensajeError:any = document.getElementById("mensajeError");
//     mensajeError.innerHTML = "Error en la aplicación";
//     throw new Error(mensaje);
// }

// error("Error en la aplicación...");

type action = 'suma' | 'resta';

function operacion(a:number,b:number,operacion:action) {
    if(operacion == 'suma') {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(operacion(5,16,'suma'));
console.log(operacion(50,10,'resta'));