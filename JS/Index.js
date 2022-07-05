// Funciones

function bienvenida() {
    let tipodepersona = parseInt(prompt("Bienvenido \n Si eres cliente ingresa (1) \n Si sos parte de la empresa pon (2)"));
    while (tipodepersona === "" || tipodepersona === null){
        tipodepersona = parseInt(prompt("Sos un cliente (1) o un empleado (2)?"));
    };
    if (tipodepersona === 1) {
        return "cliente";
    } else if (tipodepersona === 2) {
        return "empleado";
    }
}

function cliente() {
        let accion = parseInt(prompt("Que deseas hacer? \n 1- Comprar \n 2- Ver Precios \n 3- Ir al carrito \n 4- Salir"));
    while (accion !== 4){
    switch (accion){
            case 1: 
                compraCliente();
                break;
            case 2: 
                preciosCliente();
                break;
            case 3: 
                carro();
                break;
        }
    }
} 

function compraCliente(){
    for (let producto of productos) {
        let respuesta = prompt("Te interesa un " + producto.nombre + " con un precio de " + producto.precio + "\n SI \n NO").toUpperCase();
        while (respuesta ==="SI" || respuesta === "NO"){
        switch(respuesta) {
            case "SI": 
                carrito.push(producto);
                break;
            case "NO":
                break;
        }
    }
        let continuamoscomprando = prompt("Quieres volver al menu principal? \n SI \n CHAU").toUpperCase();
        while (continuamoscomprando !== "SI" || continuamoscomprando !== "CHAU"){
        switch(continuamoscomprando){
            case "SI":
                cliente();
                break;
            case "CHAU":
                alert("Muchas Gracias por su compra, en breve va a ser redireccionado al carrito");
                carro();
                break;
            }
        }
    }
}

function carro() {
    let chango = 0;

    for ( let productos of carrito) {
        chango += productos.precio;
        alert ("El Total es $" + chango);
    }

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
    let nombre_producto = "";
    let precio_producto = "";
    let stock_producto = "";

    while ((nombre_producto !== null)) {
        nombre_producto = prompt("Ingrese el producto");
        precio_producto = parseFloat(prompt("Ingrese el precio"));
        stock_producto = parseInt(prompt("Ingrese la cantidad"));

        const producto = new Producto (nombre_producto, precio_producto, stock_producto);
        productos.push(producto);
    }
}


// Declaro variables

let usuario = bienvenida();

// Llamada a la Accion


if (usuario === "cliente") {
    cliente();
} else if (usuario === "empleado"){
    empleado();
}




