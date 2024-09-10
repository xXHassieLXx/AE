var miVariable = "Hello Word";
console.log(miVariable);
// Create a Object
var person1 = {
    firstName1: "John",
    lastName1: "Sanchez",
    age: 22
};
// Destructuring 
var firstName1 = person1.firstName1, lastName1 = person1.lastName1;
console.log(firstName1, "", lastName1);
var miNombre = "Hassiel";
var ai = miNombre.ai, a2 = miNombre.a2, a3 = miNombre.a3, a4 = miNombre.a4, a5 = miNombre.a5, a6 = miNombre.a6, a7 = miNombre.a7;
console.log(ai, a2, a3, a4, a5, a6, a7);
console.log(a3);
var frutas = ["Platano", "Fresa", "Naranjas", "Uvas"];
var fruta1 = frutas[0], fruta2 = frutas[1];
console.log(fruta1, fruta2);
var frutaA = frutas[0], frutaB = frutas[1];
console.log(frutaA, fruta2);
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidoPaterno, apellidoMaterno, edad, nombreCompleto) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.nombreCompleto = nombre + apellidoPaterno + apellidoMaterno;
    }
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellidoPaterno = function () {
        return this.apellidoPaterno;
    };
    Persona.prototype.setApellidoPaterno = function (apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    };
    Persona.prototype.getApellidoMaterno = function () {
        return this.apellidoMaterno;
    };
    Persona.prototype.setApellidomaterno = function (apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    };
    Persona.prototype.getNombreCompleto = function () {
        return this.nombreCompleto;
    };
    Persona.prototype.setNombreCompleto = function (nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    };
    return Persona;
}());
var personaje1 = new Persona('Alberto ', 'Salazar ', 'Ortiz ', 30, '');
console.log(personaje1, personaje1.edad);
console.log(personaje1, personaje1.nombre);
personaje1.nombre = 'Hola';
//personaje1.edad = 'Hola';
personaje1.edad = 25;
console.log(personaje1, personaje1.edad);
var personaje2 = new Persona('Carlos ', 'Solis ', 'Ortiz ', 19, '');
personaje2.setEdad(20);
console.log('Nombre: ' + personaje2.getNombre());
console.log('Edad: ' + personaje2.getEdad());
console.log('Nombre Completo: ' + personaje2.getNombreCompleto());
console.log(personaje1.getNombreCompleto());
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var usuarioX = new UserAccount('Imagine Dragons', 1);
console.log('usuarioX:', usuarioX.name, usuarioX.id);
// Crear almenos 5 clases que van a usar en su proyecto final 
// Almenos 3 propiedades por clase 
// y almenos una funcion 
//Agregar un constructor 3
// clase productos{
// }
// clase usuario {
// }
// clase carrito {
// }
// clase MetodoPago{
// }
//Herencia 
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        //Tample string
        console.log("".concat(this.nombre, " se movio ").concat(distancia, " mts"));
    };
    Animal.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Priii Priii'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Animal;
}());
var animal1 = new Animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('Priii Priii');
console.log(animal1);
var Perro = /** @class */ (function () {
    function Perro(nombre) {
        this.nombre = nombre;
    }
    Perro.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        //Tample string
        console.log("".concat(this.nombre, " se movio ").concat(distancia, " mts"));
    };
    Perro.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'woff woff'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Perro;
}());
var perro1 = new Perro('Firulais');
perro1.mover(10);
perro1.hacerSonido('Guau Guau');
console.log(perro1);
var Serpiente = /** @class */ (function () {
    function Serpiente(nombre) {
        this.nombre = nombre;
    }
    Serpiente.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        //Tample string
        console.log("".concat(this.nombre, " se movio ").concat(distancia, " mts"));
    };
    Serpiente.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'pssssss'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Serpiente;
}());
var serpiente1 = new Serpiente('Cobra');
serpiente1.mover(2);
serpiente1.hacerSonido('Psssssss');
console.log(serpiente1);
