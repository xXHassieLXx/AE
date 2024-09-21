var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var miVariable = "Hello World";
console.log(miVariable);
var person1 = {
    firstName1: "John",
    lastName1: "Sanchez",
    age: 22
};
var firstName1 = person1.firstName1, lastName1 = person1.lastName1;
console.log(firstName1, "", lastName1);
var miNombre = "Hassiel";
var _a = miNombre.split(""), a1 = _a[0], a2 = _a[1], a3 = _a[2], a4 = _a[3], a5 = _a[4], a6 = _a[5], a7 = _a[6];
console.log(a1, a2, a3, a4, a5, a6, a7);
console.log(a3);
var frutas = ["Platano", "Fresa", "Naranjas", "Uvas"];
var fruta1 = frutas[0], fruta2 = frutas[1];
console.log(fruta1, fruta2);
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.mostrarInformacion = function () {
        return "".concat(this.nombre, " ").concat(this.apellido, ", Edad: ").concat(this.edad);
    };
    return Persona;
}());
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombre, apellido, edad, username, email) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.username = username;
        _this.email = email;
        return _this;
    }
    Usuario.prototype.getUsername = function () {
        return this.username;
    };
    Usuario.prototype.setUsername = function (username) {
        this.username = username;
    };
    Usuario.prototype.getEmail = function () {
        return this.email;
    };
    Usuario.prototype.setEmail = function (email) {
        this.email = email;
    };
    Usuario.prototype.mostrarPerfil = function () {
        return "Usuario: ".concat(this.username, ", Email: ").concat(this.email);
    };
    return Usuario;
}(Persona));
// Instancia y uso de clases corregidos
var usuario1 = new Usuario('Juan', 'Pérez', 28, 'juanp', 'juanp@example.com');
console.log(usuario1.mostrarPerfil());
console.log(usuario1.mostrarInformacion());
// Clase Productos
var Productos = /** @class */ (function () {
    function Productos(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    Productos.prototype.getNombre = function () {
        return this.nombre;
    };
    Productos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Productos.prototype.getPrecio = function () {
        return this.precio;
    };
    Productos.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Productos.prototype.getCategoria = function () {
        return this.categoria;
    };
    Productos.prototype.setCategoria = function (categoria) {
        this.categoria = categoria;
    };
    Productos.prototype.mostrarInformacion = function () {
        return "Producto: ".concat(this.nombre, ", Precio: $").concat(this.precio, ", Categor\u00EDa: ").concat(this.categoria);
    };
    return Productos;
}());
// Clase Carrito
var Carrito = /** @class */ (function () {
    function Carrito() {
        this.productos = [];
        this.total = 0;
        this.cantidad = 0;
    }
    Carrito.prototype.getProductos = function () {
        return this.productos;
    };
    Carrito.prototype.setProductos = function (productos) {
        this.productos = productos;
    };
    Carrito.prototype.getTotal = function () {
        return this.total;
    };
    Carrito.prototype.setTotal = function (total) {
        this.total = total;
    };
    Carrito.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Carrito.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    Carrito.prototype.agregarProducto = function (producto) {
        this.productos.push(producto);
        this.total += producto.getPrecio();
        this.cantidad++;
    };
    Carrito.prototype.mostrarCarrito = function () {
        return "Carrito: ".concat(this.cantidad, " productos, Total: $").concat(this.total);
    };
    return Carrito;
}());
// Clase MetodoDePago
var MetodoDePago = /** @class */ (function () {
    function MetodoDePago(tipo, numeroCuenta, titular) {
        this.tipo = tipo;
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
    }
    MetodoDePago.prototype.getTipo = function () {
        return this.tipo;
    };
    MetodoDePago.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    MetodoDePago.prototype.getNumeroCuenta = function () {
        return this.numeroCuenta;
    };
    MetodoDePago.prototype.setNumeroCuenta = function (numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    };
    MetodoDePago.prototype.getTitular = function () {
        return this.titular;
    };
    MetodoDePago.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    MetodoDePago.prototype.mostrarMetodo = function () {
        return "M\u00E9todo de Pago: ".concat(this.tipo, ", Titular: ").concat(this.titular);
    };
    return MetodoDePago;
}());
// Ejemplo de uso corregido
var producto1 = new Productos('Laptop', 1500, 'Electrónica');
console.log(producto1.mostrarInformacion());
var carrito = new Carrito();
carrito.agregarProducto(producto1);
console.log(carrito.mostrarCarrito());
var metodoPago = new MetodoDePago('Tarjeta de Crédito', '1234-5678-9101-1121', 'Juan Pérez');
console.log(metodoPago.mostrarMetodo());
