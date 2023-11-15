// Generando variables
let nombreYApellido; 
let bienvenida; 
let despedida; 
let mensajePrincipal;
let stock;
let ropa;
let precio;
let precios;
let color;
let metodoDePago;
let cuotas;
let descuento;
let precioParcial;
let precioFinal;
let compra;

// Declaración de variable y saludo al usuario
nombreYApellido = prompt("Ingrese su nombre y/o apellido");
bienvenida = `Bienvenido ${nombreYApellido} a Moba deportes. La mejor tienda de ropa en Latinoamérica.`;


// Declaración de variables
mensajePrincipal = "En que podemos ayudarlo/a el dia de hoy?:\n1) Ver Ropa \n2) Consultar Stock \n3)Consultar colores \n4) ver formas de pago \n5) ver precios\n6) Comprar\n7) Salir hacia la pagina principal"
stock = "Este es el stock del cual disponemos en este momento:\nShorts: 4\nRemeras: 5\nZapatillas: 3\nPantalones largos: 5";
precio = "Los precios que tenemos son los siguientes:\nShorts: $4,000\nRemeras: $7,000\nZapatillas: $9,500\nPantalones largos: $5,500";
precios = {
    1: 4.000,
    2: 7.000,
    3: 9.500,
    4: 5.500
};
ropa = "Disponemos de las siguientes opciones: \n1) Shorts\n2) Remeras \n3) Zapatillas\n4) Pantalon Largo"
despedida = "Gracias por visitar nuestro menu interactivo...\nRedirigiendo hacia el inicio..."
color = "disponemos los siguientes colores:\n1) Negro \n2) Blanco \n3) Azul francia \n4) Rosa \n5) Verde militar"
metodoDePago = "Contamos con los siguientes metodos de pago: \n1) 1, 3 y hasta 6 cuotas sin interes con tarjeta de credito \n2) 10% de descuento en efectivo \n3) tarjeta de debito"
precioFinal = 0
precioParcial = 0


//Codigo principal 

alert(bienvenida)
do {
    opcion = prompt(mensajePrincipal);

    switch (opcion) {
        case "1":
            alert(ropa)
            break;

        case "2":
            //consultar stock
            alert(stock);
            break;

        case "3":
            //consultar colores
            alert(color);
            break;

        case "4":
            //formas de pago
            alert(metodoDePago);
            break;

        case "5":
            //precios de los productos
            alert(precio);
            break;
        
        case "6":
            //elige el producto y lo almacena en la variable
            do {
                opcionA = parseInt(prompt(`¿Qué producto desea comprar? ${ropa}`));
            } while (opcionA < 1 || opcionA > 4);

            switch (opcionA) {
                case 1:
                    opcionA = "Shorts";
                    break;
                case 2:
                    opcionA = "Remeras";
                    break;
                case 3:
                    opcionA = "Zapatillas";
                    break;
                case 4:
                    opcionA = "Pantalon Largo";
                    break;
                default:
                    break;
            }
            
            do {
                opcionB = parseInt(prompt(`De que color desea su producto? ${color}`));
            } while (opcionB < 1 || opcionB > 5);

            switch (opcionB) {
                case 1:
                    opcionB = "Negro";
                    break;
                case 2:
                    opcionB = "Blanco";
                    break;
                case 3:
                    opcionB = "Azul Francia";
                    break;
                case 4:
                    opcionB = "Rosa";
                    break;
                case 5:
                    opcionB = "Verde Militar"
                default:
                    break;
            }
            carrito = alert(`Carrito de compras: \n1 ${opcionA} ${opcionB}`)
            
            break;
            
        case "7":
            // Salir
            alert(despedida);
            break;

        default:
            alert("Opción no válida");
            break;
    }

} while (opcion !== "7");
