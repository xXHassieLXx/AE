const _ =require('lodash');

const array = [1,2,3,4,5,6,7,8,9, 10];
console.log(_.chunk(array,2));

let arreglo = ['juan', 'pedro', 'Luis', 'Ana', 'Maria', 'jose', 'Carlos', ''];
console.log(_.chunk(arreglo,3));
console.log(_.compact(arreglo));

let array1 = ['Superman', 'Batman', 'Flash']; 
let array2 = ['Thor', 'Ironman', 'Spiderman'];
console.log(_.concat(array1, array2));

let array3 = ['Chavo', 'El chompiras', 'El botija', 'El peterete'];
let array4 = ['El chavo', 'Chapulin Colorado', 'Doctor chapatin'];
console.log(_.difference(array3, array4));

let arreglo5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
//drop elimina los primeros n elementos del array 
console.log(_.drop(arreglo5,3));

const numeroAleatorio = _.random(0,100);
console.log(numeroAleatorio);

const saludar = () => {
    console.log('Hola mayito, ¿como estas?')
}

const saludarMayito = _.once(saludar);
saludarMayito();
saludarMayito();
saludarMayito();


const users = [
    {usuario: 'Mayito', edad: 25},
    {usuario: 'Juanito', edad: 30},
    {usuario: 'Pedrito' , edad: 35},
    {usuario: 'Pablito', edad: 40},
    {usuario: 'Carlitos', edad: 45}
]

const sortedUsers = _.sortBy(users, ['edad'],['asc']);
console.log(sortedUsers);

const obtieneNumero = ()=>{
    return _.random(0,100);
}

let result = _.times(50, obtieneNumero);
console.log(result);

//Reto1 
//Crear un arreglo con 100 numeros aleatorios y mostrar los numeros pares 
// y los numeros impares en arreglos diferentes 

const numerosAleatorios = _.times(100, () => _.random(0, 100));

const numerosPares = _.filter(numerosAleatorios, (num) => num % 2 === 0);
const numerosImpares = _.filter(numerosAleatorios, (num) => num % 2 !== 0);

console.log('Números pares:', numerosPares);
console.log('Números impares:', numerosImpares);


//Reto2 
//Crear un arreglo con 100 numeros aleatorios y mostrar los numeros primos 
// y los numeros no primos en arreglos diferentes 

const esPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const numerosPrimos = _.filter(numerosAleatorios, esPrimo);
  const numerosNoPrimos = _.filter(numerosAleatorios, (num) => !esPrimo(num));
  
  console.log('Números primos:', numerosPrimos);
  console.log('Números no primos:', numerosNoPrimos);
  

//Reto3 
//Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra 'A' en arreglos diferentes

const nombres = ['Ana', 'Alberto', 'Andrés', 'Luis', 'María', 'Alejandro', 'Beatriz'];

const nombresConA = _.filter(nombres, (nombre) => _.startsWith(nombre, 'A'));
const nombresSinA = _.filter(nombres, (nombre) => !_.startsWith(nombre, 'A'));

console.log('Nombres que empiezan con A:', nombresConA);
console.log('Nombres que no empiezan con A:', nombresSinA);
