//Enum 

enum Color{
    Rojo = 50,
    Verde,
    Azul
}

console.log(Color.Verde);
//Color.Rojo = 100; ERROR
console.log(Color.Rojo);
let color1 = Color.Rojo; 
color1 = Color.Verde;
//color1 = 20; ERROR
console.log('color1 = ',color1);

enum CardinalDirections {
    Nourth = 'Norte',
    South = 'Sur',
    East = 'Este',
    West = 'Oeste'
}

let direction:CardinalDirections = CardinalDirections.Nourth;
console.log('direction: ', direction);

enum StatusCodes{
    Success = 200,
    NotFound = 404,
    InternalServerError = 500 
}

let statusCode:StatusCodes = StatusCodes.Success;
console.log('status: ', statusCode);


enum Volumen{
    Bajo = 1,
    Medio = 5,
    Alto = 10
}

let volumen:Volumen = Volumen.Alto;
console.log('volumen: ', volumen);


