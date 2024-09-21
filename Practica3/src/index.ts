let normalx:any = 'Hola'; 
normalx = 10; 
normalx = true;
let usuario :any = 20; 
console.log(normalx);

let nombre:string = 'Juan'; 
nombre = 'Juan Carlos';
//nombre = null
console.log(nombre);

let value:any;
console.log(value);

value = true; 
value = 10; 
value = 'hola'; 
value = {};
value = [];
value = null; 
value = undefined;
console.log(value);


let miValor:unknown;
console.log('Tipo Unknow',miValor);

let value1:unknown = miValor;
let value2: any = miValor;
// let value3: boolean = miValor; 
// let value4: number = miValor; 

const edad: number = 18; 
console.log('Edad',edad);
console.log('Edad' + edad); 


const sueldo :number = 1.234; 
const total:number = 0; 

console.log('Sueldo',sueldo);
console.log('Total',total);

const personaje:string = "El Chavo";
const otroPersonaje:string = 'Don Ramon'; 
const otroMas:string = 'Profesor Jirafales y ${personaje}';
console.log(otroMas);

const heroe:string = "DeadPool's House";
console.log(heroe);
console.log(heroe.toLowerCase());

let vengador:any; 
vengador = 'Dr strage'; 
console.log(vengador.chatAt(4));
vengador = 150.55; 
console.log(vengador.toFixed(1))


