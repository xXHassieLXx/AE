let miVariable: string = "Hello World";
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
    protected nombre: string;
    protected apellido: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    mostrarInformacion(): string {
        return `${this.nombre} ${this.apellido}, Edad: ${this.edad}`;
    }
}

class Usuario extends Persona {
    private username: string;
    private email: string;

    constructor(nombre: string, apellido: string, edad: number, username: string, email: string) {
        super(nombre, apellido, edad);
        this.username = username;
        this.email = email;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    mostrarPerfil(): string {
        return `Usuario: ${this.username}, Email: ${this.email}`;
    }
}

// Instancia y uso de clases corregidos
const usuario1 = new Usuario('Juan', 'Pérez', 28, 'juanp', 'juanp@example.com');
console.log(usuario1.mostrarPerfil());
console.log(usuario1.mostrarInformacion());

// Clase Productos
class Productos {
    private nombre: string;
    private precio: number;
    private categoria: string;

    constructor(nombre: string, precio: number, categoria: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    setPrecio(precio: number): void {
        this.precio = precio;
    }

    getCategoria(): string {
        return this.categoria;
    }

    setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    mostrarInformacion(): string {
        return `Producto: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria}`;
    }
}

// Clase Carrito
class Carrito {
    private productos: Productos[];
    private total: number;
    private cantidad: number;

    constructor() {
        this.productos = [];
        this.total = 0;
        this.cantidad = 0;
    }

    getProductos(): Productos[] {
        return this.productos;
    }

    setProductos(productos: Productos[]): void {
        this.productos = productos;
    }

    getTotal(): number {
        return this.total;
    }

    setTotal(total: number): void {
        this.total = total;
    }

    getCantidad(): number {
        return this.cantidad;
    }

    setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }

    agregarProducto(producto: Productos): void {
        this.productos.push(producto);
        this.total += producto.getPrecio();
        this.cantidad++;
    }

    mostrarCarrito(): string {
        return `Carrito: ${this.cantidad} productos, Total: $${this.total}`;
    }
}

// Clase MetodoDePago
class MetodoDePago {
    private tipo: string;
    private numeroCuenta: string;
    private titular: string;

    constructor(tipo: string, numeroCuenta: string, titular: string) {
        this.tipo = tipo;
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    getNumeroCuenta(): string {
        return this.numeroCuenta;
    }

    setNumeroCuenta(numeroCuenta: string): void {
        this.numeroCuenta = numeroCuenta;
    }

    getTitular(): string {
        return this.titular;
    }

    setTitular(titular: string): void {
        this.titular = titular;
    }

    mostrarMetodo(): string {
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