/**** Declarando nuestros primeros Arrays ****/

// const productos = ["Sillón", "Silla", "Mesa", "Ropero"];
// const numeros = [1, 2, 3, 4, 5];
// const booleanos = [true, true, false];
// const mezcla = ["Sillón", 1, 2, true];
// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 27
//     },
//     {
//         nombre: "María",
//         edad: 25
//     }
// ];

/* Accediendo a nuestro Array */
// console.log(productos);
// console.log(productos[2]);

/* Recorriendo nuestro Array */
// for (let i = 0; i < 4; i++) {
//     console.log(productos[i]);
// }

/*********** MÉTODOS ***********/

/* length */
// console.log(productos.length);
// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }

/* push: Agregar un elemento al final del Array */
// productos.push("Cama");
// console.log(productos);

/* unshift: Agregar un elemento al comienzo del Array */
// productos.unshift("Puerta");
// console.log(productos);

/* shift: Eliminar un elemento al comienzo del Array */
// productos.shift();
// console.log(productos);

/* pop: Eliminar un elemento al final del Array */
// productos.pop();
// console.log(productos);

/* splice: Eliminar uno o varios elementos en nuestro Array */
// productos.splice(1, 2);
// console.log(productos);

/* join: Generar una string con los elementos del Array */
// console.log(productos.join(", "));
// console.log(productos.join(" / "));

/* concat: Unir dos Arrays en uno */
// const productos2 = ["Puerta", "Ventana", "Cama"];
// const productosFinal = productos.concat(productos2);
// console.log(productosFinal);

/* slice: Generar una copia de una parte de nuestro Array */
// const productosComedor = productos.slice(1, 3);
// console.log(productosComedor);

/* indexOf: Saber el número de índice de nuestro elemento */
// console.log(productos.indexOf("Ropero"));

/* includes: Saber si un elemento existe en nuestro Array */
// console.log(productos.includes("Cama"));
// if (productos.includes("Silla")) {
//     console.log(productos.indexOf("Silla"));
// } else {
//     console.log("Silla no se encuentra en el Array");
// }

/* reverse: Invertir el orden de nuestro Array */
// productos.reverse();
// console.log(productos);