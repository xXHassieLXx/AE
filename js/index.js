"use strict";
console.log("Hola CodeSpaces");
const nuevoHeroe = "Spiderman";
function returnName() {
    return nuevoHeroe;
}
console.log(returnName());
const heroeNombre = returnName();
let otraVariable = returnName();
console.log("De que tipo es?", typeof otraVariable);
//Parametros obligatorios en funciones 
const nombreCompleto = (nombre, apellido) => {
    return ` ${nombre} ${apellido}`;
};
const tunombre = nombreCompleto("carlos", "Serrano");
console.log(tunombre);
//Parametros opcionales en funciones 
const nombreCompleto2 = (nombre, apellido) => {
    return ` ${nombre} ${apellido || "Sin apellido"} `;
};
const tunombre2 = nombreCompleto2("carlos");
console.log(tunombre2);
const nombreCompleto3 = (nombre, apellido, mayusculas = false) => {
    if (mayusculas) {
        return ` ${nombre} ${apellido || "Sin apellido"}`.toLowerCase();
    }
    else {
        return ` ${nombre} ${apellido || "Sin apellido"} `;
    }
};
const tunombre3 = nombreCompleto3("carlos", "", true);
console.log(tunombre3);
//Operador REST
const nombreCompleto4 = (nombre, edad, ...restoApellidos) => {
    return `${nombre} ${edad} ...Resto ${restoApellidos.join("")}`;
};
const superman4 = nombreCompleto4("Clark ", 32, "Kent ", "Oswald ", "Smith ", "Jhonson ");
console.log(superman4);