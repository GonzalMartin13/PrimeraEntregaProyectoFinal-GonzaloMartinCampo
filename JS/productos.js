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

// array con clases
const listaActulizada = [];

class Producto {
    constructor (objeto) {
    this.nombre = objeto.nombre;
    this.precio = objeto.precio;
    this.stock = parseInt(objeto.cantidad);
    this.vendido = false; 
    this.iva = 21;
    }
    precioMasIva() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }

    ventaProducto() {
        this.vendido = true;
        this.stock = (this.stock - 1);
    }
}

