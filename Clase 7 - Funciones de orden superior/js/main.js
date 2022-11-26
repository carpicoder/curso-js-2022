/*******************************************************************/
/***************** FUNCIONES DE ORDEN SUPERIOR *********************/
/*******************************************************************/

/**** ABSTRACCIÓN ****/
// function sumarRango(min, max) {
//     let total = 0;
    
//     for (let i = min; i <= max; i++) {
//         total += i;
//     }

//     return total;
// }

// console.log(sumarRango(1, 10));
// console.log(sumarRango(3, 7));
// console.log(sumarRango(2, 4));


/**** RETORNO DE FUNCIONES ****/
// function mayorQue(x) {
//     return (num) => num > x;
// }
// const mayorQueDiez = mayorQue(10);
// const mayorQueVeinte = mayorQue(20);
// // const mayorQueDiez = num => num > 10;

// console.log(mayorQueDiez(9));


/*******************************************************************/
/********************* MÉTODOS DE BÚSQUEDA *************************/
/********************** Y TRANSFORMACIÓN ***************************/
/*******************************************************************/

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
const productos = [
    { nombre: "Mesa", precio: 3500 },
    { nombre: "Silla de plástico", precio: 2000 },
    { nombre: "Silla de madera", precio: 2500 },
    { nombre: "Ventana", precio: 4500 },
    { nombre: "Puerta", precio: 3000 }
];



// forEach() => Recorrer el Array y ejecutar lo que le digamos con cada elemento

// numeros.forEach((numero) => {
//     console.log(numero);
// });

// productos.forEach((producto) => {
//     console.log(producto.nombre);
//     console.log(producto.precio);
// });



// find() => Recorrer el Array y retornar el primer elemento que cumpla con una condición

// const perro = animales.find((animal) => animal === "Perro");
// console.log(perro);

// let productoElegido = prompt("Ingrese el producto que quiere comprar");
// console.log( productos.find((producto) => producto.nombre === productoElegido ) );



// filter() => Recorrer el Array y retornar uno nuevo con todos los elementos que cumplan con una condición

// const gato = animales.filter((animal) => animal === "Gato");
// console.log(gato);

// const sillas = productos.filter((producto) => producto.nombre.includes("Silla"));
// console.log(sillas);



// some() => Recorrer el Array y responder true o false según si encuentra o no un elemento que cumpla con una condición

// const cisne = animales.some((animal) => animal === "Cisne");
// console.log(cisne);

// const caballo = animales.some((animal) => animal === "Caballo");
// console.log(caballo);



// map() => Recorrer el Array y retornar uno nuevo con los elementos transformados del Array original

// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);

// const preciosActualizados = productos.map((producto) => {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.5
//     }
// });
// console.log(productos);
// console.log(preciosActualizados);



// reduce() => Recorrer el Array y retornarnos un único valor tras hacer una operación sobre los elementos

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(total);

// const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log(totalCarrito);



// sort() => Reordenar el Array según el criterio que le indiquemos
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// numeros.sort((a, b) => a + b);
// console.log(numeros);



/*******************************************************************/
/***************************** MATH ********************************/
/*******************************************************************/

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

// // min() => Retornar el número mínimo de un listado
// console.log(Math.min(50, 12, 37, 17, 25, 6));

// // max() => Retornar el número máximo de un listado
// console.log(Math.max(50, 12, 37, 17, 25, 6));

// // ceil() => Retornar el número que le indiquemos redondeado hacia arriba
// console.log(Math.ceil(numeroDecimal1));
// console.log(Math.ceil(numeroDecimal2));

// // floor() => Retornar el número que le indiquemos redondeado hacia abajo
// console.log(Math.floor(1.25));
// console.log(Math.floor(1.75));

// // round() => Retornar el número que le indiquemos redondeado más cercano
// console.log(Math.round(numeroDecimal1));
// console.log(Math.round(numeroDecimal2));

// random() => Retornar un número aleatorio entre 0 inclusive y 1 inclusive
// console.log(Math.random());
// console.log(Math.round(Math.random()));

// console.log( Math.round( Math.random() * 50 ) );
// console.log( Math.round( Math.random() * 50 + 20 ) );

// console.log(Math.floor( Math.random() * 3 + 1 ));

// function generarNumero(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const numeroRandom = generarNumero(100, 200);
// console.log(numeroRandom);