// ==           Es igual
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < <= > >=    Menor / Mayor / Menor o igual / Mayor o igual

// &&           Operador AND (y)
// ||           Operador OR (o)
// !            Operador NOT (no)

// let edad = prompt("Ingrese su edad");

// if (edad >= 18) {
//     alert("Sos mayor de edad. Podés ingresar.");
// } else {
//     alert("Sos menor de edad. No podés ingresar.");
// }

// let hora = prompt("Ingrese la hora");

// if (hora >= 6 && hora < 12) {
//     alert("Buenos días!");
// } else if (hora >= 12 && hora < 20) {
//     alert("Buenas tardes!");
// } else {
//     alert("Buenas noches!");
// }

let usuario1 = "Carpi";
let usuario2 = "Coder";

let nombreUsuario = prompt("Ingrese su nombre de usuario");

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert("Nombre de usuario incorrecto.");
}