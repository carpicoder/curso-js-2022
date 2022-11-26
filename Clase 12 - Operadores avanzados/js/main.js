/***
 
 VALORES FALSY
 0, null, undefined, NaN, false, string vacío

 VALORES NULLISH
 null, undefined

***/

// Operadores += y ++

// let numero = 10;

// numero = numero + 1;
// numero += 1;
// numero++;

// console.log(numero);


/**************************************************/
/**************************************************/
// Operador ternario

// let edad = 21;

// if (edad >= 18) {
//     console.log("Podés ingresar");
// } else {
//     console.log("No podés ingresar");
// }

// Sintaxis
// condicional ? resultado1 : resultado2

// edad >= 18 ? console.log("Podés ingresar") : console.log("No podés ingresar");

// console.log( edad >= 18 ? "Podés ingresar" : "No podés ingresar" );


/**************************************************/
/**************************************************/
// Operador &&

// const carrito = [];

// if (carrito.length === 0) {
//     console.log("El carrito está vacío")
// }

// carrito.length === 0 && console.log("El carrito está vacío");


/**************************************************/
/**************************************************/
// Operador ||
// FALSY: 0, null, undefined, NaN, false, string vacío

// let usuario1 = "Carpi";
// let usuario2 = null;

// if (usuario2) {
//     console.log(usuario2);
// } else {
//     console.log("El usuario no existe");
// }

// console.log( usuario1 || "El usuario no existe" );
// console.log( usuario2 || "El usuario no existe" );


/**************************************************/
/**************************************************/
// Operador ??
// NULLISH: null, undefined

// let numero = 0;
// let numero2 = null;

// console.log( numero ?? "El número no es válido" );
// console.log( numero2 ?? "El número no es válido" );


/**************************************************/
/**************************************************/
// Acceso condicional a un objeto

// const usuario = {
//     nombre: "Carpi",
//     cursos: {
//         dw: "Aprobado",
//         js: "Aprobado"
//     }
// }

// console.log( usuario?.cursos?.dw || "La propiedad no existe");
// console.log( usuario?.trabajos?.youtube || "La propiedad no existe");


/**************************************************/
/**************************************************/
// Desestructuración de objetos

// const usuario = {
//     nombre: "Carpi",
//     edad: 27,
//     cursos: {
//         dw: "Aprobado",
//         js: "Aprobado"
//     }
// }

// let { nombre: nombreUsuario, edad, nacionalidad } = usuario;

// console.log(nombreUsuario);
// console.log(edad);


/**************************************************/
/**************************************************/
// Desestructuración de arrays

// const nombres = ["Carpi", "María", "Julián", "Carlos"];

// const [ , a, b] = nombres;

// console.log(a);



/**************************************************/
/**************************************************/
// Spread de arrays

// const nombres = ["Carpi", "María", "Julián", "Carlos"];

// const nombres2 = [...nombres];

// nombres2[0] = "Matías";

// console.log(nombres);
// console.log(nombres2);