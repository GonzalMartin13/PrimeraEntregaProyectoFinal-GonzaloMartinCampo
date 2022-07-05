// Funciones

function bienvenida() {
    alert ("Bienvenido al comercio virtual de La Tienda Del Mueble!!");
    let tipodepersona;
    do { 
        tipodepersona = parseInt(prompt(" Si eres cliente ingresa (1) \n Si sos parte de la empresa pon (2)"));
    } while (tipodepersona !== 1 && tipodepersona != 2);        
    
    if (tipodepersona === 1) {
                cliente();
    } else if (tipodepersona === 2) {
                empleado();
    }
}

function cliente() {
        let accion = parseInt(prompt("Que deseas hacer? \n 1- Comprar \n 2- Ver Precios \n 3- Ir al carrito \n 4- Salir"));
    while (accion <= 1 && accion >= 4) {
            accion = parseInt(prompt("Elija una opccion \n 1- Comprar \n 2- Ver Precios \n 3- Ir al carrito \n 4- Salir"));} 

    switch (accion){
            case 1: 
                compraCliente();
                
            case 2: 
                preciosCliente();
                break;
            case 3: 
                carro();
                break;
            case 4:
                alert("Chauuuu =(");
        }
    } 

function compraCliente(){
    for (let producto of productos) {
        let nuevosProd = new Producto (producto); 

        let respuesta = prompt("Te interesa un " + nuevosProd.nombre + " con un precio de $" + nuevosProd.precio + "\n SI \n NO").toUpperCase();
        switch(respuesta) {
            case "SI": 
                carrito.push(producto);
                break;
            default:
                break;
        }    
    }
            
    let seguimosCompra = parseInt(prompt("Quieres volver al menu? \n 1) Seguir comprando \n 2) Quiero ir a pagar"));
    if (seguimosCompra === 1){ compraCliente();} else if ( seguimosCompra === 2){ carro();}
}

function preciosCliente(){
    let lista = "-- Lista de precios -- \n\n";

    for (let producto of listaActulizada){
        lista += "Nombre: " + producto.nombre + "Precio: " + producto.precio + "\n";
    }
        alert(lista);
}
    

function carro() {
    let chango = 0;

    for ( let productos of carrito) {
        chango += productos.precio;
    }
    alert ("El Total es $" + chango);
    let pago = parseInt(prompt("Con cuanto abonas?"));
    alert ("Su vuelto es $" + (pago - chango) + " \n Muchas Gracias, vuelvas prontos!");
}


function empleado(){
    let ID = parseInt(prompt("Ingrese su ID"));
    let identificacion = codigoInterno.find((interno) => interno.numero === ID);
    
        if (identificacion.numero === ID) {
            let tarea = prompt("Hola de nuevo " + identificacion.nombre + " que tienes que hacer hoy? \n Cargar Mercaderia \n Controlar stock \n (ingrese Cargar o Controlar segun el caso)").toUpperCase(); 
            while (tarea !== null ) {         
            switch (tarea) {
                case "CARGAR":
                    agregarProd();
                    break;
                case "CONTROLAR":
                    stock();
                    break;
            }
            tarea = prompt("Hola de nuevo " + identificacion.nombre + " que tienes que hacer hoy? \n Cargar Mercaderia \n Controlar stock \n (ingrese Cargar o Controlar segun el caso o ESC para salir)");
        }
    } 
}

function agregarProd(){
    
    let nombreObj = "";
    let precioObj = "";
    let stockObj = "";
    let agregarobj = "";
    
    while ((agregarobj !== null && agregarobj !== "NO")) {
        nombreObj = prompt("Ingrese el producto");
        precioObj = parseInt(prompt("Ingrese el precio"));
        stockObj = parseInt(prompt("Ingrese la cantidad"));
        agregarobj = prompt("Quieres agregar otro objeto?").toUpperCase();

        const obj = {nombre: nombreObj, precio: precioObj, cantidad: stockObj};
        productos.push(obj);        
    }
}

function stock(){

}

// Declaro variables

let usuario = bienvenida();

// Llamada a la Accion






