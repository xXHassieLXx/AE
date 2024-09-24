"use strict";
let miVariable = "Hello World";
console.log(miVariable);
const person1 = {
    firstName1: "John",
    lastName1: "Sanchez",
    age: 22
};
let { firstName1, lastName1 } = person1;
console.log(firstName1, "", lastName1);
let miNombre = "Hassiel";
let [a1, a2, a3, a4, a5, a6, a7] = miNombre.split("");
console.log(a1, a2, a3, a4, a5, a6, a7);
console.log(a3);
const frutas = ["Platano", "Fresa", "Naranjas", "Uvas"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    mostrarInformacion() {
        return `${this.nombre} ${this.apellido}, Edad: ${this.edad}`;
    }
}
class Usuario extends Persona {
    constructor(nombre, apellido, edad, username, email) {
        super(nombre, apellido, edad);
        this.username = username;
        this.email = email;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    mostrarPerfil() {
        return `Usuario: ${this.username}, Email: ${this.email}`;
    }
}
// Instancia y uso de clases corregidos
const usuario1 = new Usuario('Juan', 'Pérez', 28, 'juanp', 'juanp@example.com');
console.log(usuario1.mostrarPerfil());
console.log(usuario1.mostrarInformacion());
// Clase Productos
class Productos {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Producto: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria}`;
    }
}
// Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
        this.total = 0;
        this.cantidad = 0;
    }
    getProductos() {
        return this.productos;
    }
    setProductos(productos) {
        this.productos = productos;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getCantidad() {
        return this.cantidad;
    }
    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
    agregarProducto(producto) {
        this.productos.push(producto);
        this.total += producto.getPrecio();
        this.cantidad++;
    }
    mostrarCarrito() {
        return `Carrito: ${this.cantidad} productos, Total: $${this.total}`;
    }
}
// Clase MetodoDePago
class MetodoDePago {
    constructor(tipo, numeroCuenta, titular) {
        this.tipo = tipo;
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getNumeroCuenta() {
        return this.numeroCuenta;
    }
    setNumeroCuenta(numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    mostrarMetodo() {
        return `Método de Pago: ${this.tipo}, Titular: ${this.titular}`;
    }
}
// Ejemplo de uso corregido
const producto1 = new Productos('Laptop', 1500, 'Electrónica');
console.log(producto1.mostrarInformacion());
const carrito = new Carrito();
carrito.agregarProducto(producto1);
console.log(carrito.mostrarCarrito());
const metodoPago = new MetodoDePago('Tarjeta de Crédito', '1234-5678-9101-1121', 'Juan Pérez');
console.log(metodoPago.mostrarMetodo());
