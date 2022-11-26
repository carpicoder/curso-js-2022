// console.log("Hola");

// setTimeout(() => {
//     console.log("Estoy por la mitad.")
// }, 0);

// console.log("Chau!");

// setInterval(() => {
//     console.log("Hola!");
//     console.log("Chau!");
// }, 1000);

// let contador = 0;

// const intervalo = setInterval(() => {
//     contador++;
//     console.log(contador);

//     if (contador === 5) {
//         clearInterval(intervalo);
//         console.log("El contador se frenó");
//     }
// }, 1000)


// const eventoFuturo = (res) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             res === true ? resolve("Promesa resuelta") : reject("Promesa rechazada");
//         }, 2000);
//     })
// }

// const valor = false;

// eventoFuturo(valor)
//     .then((respuesta) => {
//         console.log(respuesta)
//     })
//     .catch((respuesta) => {
//         console.log(respuesta)
//     })
//     .finally(() => {
//         console.log("Finalizó el proceso");
//     })