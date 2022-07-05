const codigoInterno = [
    {nombre:"Gonzalo", numero: 13},
    {nombre:"Matias", numero: 7},
    {nombre:"Juan Carlo", numero: 20} 
];

const productos = [
        {nombre:"Juego living", precio: 50000, cantidad: 100},
        {nombre:"Juego comedor", precio: 30000, cantidad: 100},
        {nombre:"Juego dormitorio", precio: 70000, cantidad: 100}
];
const carrito = [];

class Producto {
    constructor (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.vendido = false; 
    }
}

