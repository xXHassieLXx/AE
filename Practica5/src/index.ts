let miVariable : string = "Hello Word";
console.log(miVariable); 

// Create a Object
const person1 = {
    firstName1: "John",
    lastName1: "Sanchez",
    age:22
}

// Destructuring 
let {firstName1, lastName1} = person1; 
console.log(firstName1, "", lastName1);

let miNombre = "Hassiel";
let {ai,a2,a3,a4,a5,a6,a7}:any = miNombre; 
console.log(ai, a2, a3, a4, a5, a6, a7);
console.log(a3);


const frutas = ["Platano", "Fresa", "Naranjas", "Uvas"];
let [fruta1, fruta2] = frutas; 
console.log(fruta1, fruta2);

let [frutaA, frutaB] = frutas; 
console.log(frutaA,fruta2);

class Persona {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    edad: number;
    nombreCompleto: string;
    constructor(nombre:string, apellidoPaterno:string, apellidoMaterno:string, edad:number,nombreCompleto:string){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.nombreCompleto = nombre + apellidoPaterno + apellidoMaterno;
    }
    getEdad():number{
        return this.edad;
    }
    setEdad(edad:number):void{
        this.edad = edad;
    }



    getNombre():string{
        return this.nombre
    }
    setNombre(nombre:string):void{
        this.nombre = nombre
    }




    getApellidoPaterno():string{
        return this.apellidoPaterno
    }
    setApellidoPaterno(apellidoPaterno:string):void{
        this.apellidoPaterno = apellidoPaterno
    }




    getApellidoMaterno():string{
        return this.apellidoMaterno
    }
    setApellidomaterno(apellidoMaterno:string):void{
        this.apellidoMaterno = apellidoMaterno
    }




    getNombreCompleto():string{
        return this.nombreCompleto
    }
    setNombreCompleto(nombreCompleto:string):void{
        this.nombreCompleto = nombreCompleto
    }


}

let personaje1 = new Persona('Alberto ','Salazar ','Ortiz ',30,'' );
console.log(personaje1,personaje1.edad);
console.log(personaje1,personaje1.nombre);
personaje1.nombre = 'Hola'
//personaje1.edad = 'Hola';
personaje1.edad = 25; 
console.log(personaje1,personaje1.edad);



let personaje2 = new Persona('Carlos ','Solis ','Ortiz ',19,'');
personaje2.setEdad(20);
console.log('Nombre: ' + personaje2.getNombre());
console.log('Edad: ' + personaje2.getEdad());
console.log('Nombre Completo: ' + personaje2.getNombreCompleto());

console.log(personaje1.getNombreCompleto())

//Interface 

interface User {
    name:string;
    id:number; 
}

class UserAccount{
    name:string;
    id:number;

    constructor(name:string, id:number){
        this.name = name;
        this.id = id;
    }
}

const usuarioX: User = new UserAccount('Imagine Dragons',1);
console.log('usuarioX:',usuarioX.name, usuarioX.id)


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
class Animal {
    nombre:string;
    constructor(nombre:string){
        this.nombre = nombre;
    }


    mover(distancia:number = 0){
        //Tample string
        console.log(`${this.nombre} se movio ${distancia} mts`)
    }

    hacerSonido(sonido = 'Priii Priii'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let animal1 = new Animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('Priii Priii');
console.log(animal1)




class Perro {
    nombre:string;
    constructor(nombre:string){
        this.nombre = nombre;
    }


    mover(distancia:number = 0){
        //Tample string
        console.log(`${this.nombre} se movio ${distancia} mts`)
    }

    hacerSonido(sonido = 'woff woff'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

const perro1 = new Perro('Firulais');
perro1.mover(10);
perro1.hacerSonido('Guau Guau');
console.log(perro1);




class Serpiente {
    nombre:string;
    constructor(nombre:string){
        this.nombre = nombre;
    }


    mover(distancia:number = 0){
        //Tample string
        console.log(`${this.nombre} se movio ${distancia} mts`)
    }

    hacerSonido(sonido = 'pssssss'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

const serpiente1 = new Serpiente('Cobra');
serpiente1.mover(2);
serpiente1.hacerSonido('Psssssss');
console.log(serpiente1);
