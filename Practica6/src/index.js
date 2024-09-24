"use strict";
//Enum 
var Color;
(function (Color) {
    Color[Color["Rojo"] = 50] = "Rojo";
    Color[Color["Verde"] = 51] = "Verde";
    Color[Color["Azul"] = 52] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
//Color.Rojo = 100; ERROR
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
//color1 = 20; ERROR
console.log('color1 = ', color1);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["Nourth"] = "Norte";
    CardinalDirections["South"] = "Sur";
    CardinalDirections["East"] = "Este";
    CardinalDirections["West"] = "Oeste";
})(CardinalDirections || (CardinalDirections = {}));
let direction = CardinalDirections.Nourth;
console.log('direction: ', direction);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
})(StatusCodes || (StatusCodes = {}));
let statusCode = StatusCodes.Success;
console.log('status: ', statusCode);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["Bajo"] = 1] = "Bajo";
    Volumen[Volumen["Medio"] = 5] = "Medio";
    Volumen[Volumen["Alto"] = 10] = "Alto";
})(Volumen || (Volumen = {}));
let volumen = Volumen.Alto;
console.log('volumen: ', volumen);
