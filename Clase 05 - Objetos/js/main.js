/***************************************************************/
/***************************************************************/
// OBJETOS
// const usuario1 = {
//     nombre: "Carpi",
//     edad: 27,
//     nacionalidad: "Argentina"
// }

// const usuario2 = {
//     nombre: "María",
//     edad: 25,
//     nacionalidad: "Argentina"
// }

// const producto1 = {
//     titulo: "Sillón",
//     color: "Rojo",
//     precio: 50000
// }

// usuario1.nacionalidad = "Brasilera";

/***************************************************************/
/***************************************************************/
// CONSTRUCTOR

// function Producto(titulo, color, precio) {

//     this.titulo = titulo;
//     this.color = color;
//     this.precio = precio;
//     this.saludar = function(){ console.log("Hola, soy " + this.titulo) };
// }

// const producto1 = new Producto("Sillón", "Rojo", 50000);
// const producto2 = new Producto("Cama", "Blanca", 150000);

// console.log(producto1);

/***************************************************************/
/***************************************************************/
// CLASES

// class Producto {
//     constructor(titulo, color, precio) {

//         this.titulo = titulo;
//         this.color = color;
//         this.precio = precio;

//     }
// }

// const producto1 = new Producto("Sillón", "Rojo", 50000);
// console.log(producto1);

/***************************************************************/
/***************************************************************/
// MÉTODOS

// class Persona {
//     constructor(nombre, edad, nacionalidad) {

//         this.nombre = nombre;
//         this.edad = edad;
//         this.nacionalidad = nacionalidad;

//     }
//     saludar() {
//          console.log("Hola, soy " + this.nombre);
//     }
//     cumpleanios() {
//          this.edad++;
//     }
// }

// const persona1 = new Persona("Carpi", 27, "Argentina");

// persona1.saludar();
// persona1.cumpleanios();
// console.log(persona1.edad);

// OPERADOR IN

// if ("hobbies" in persona1) {
//     console.log(persona1.hobbies);
// } else {
//     console.log("No hay hobbies");
// }

// OPERADOR FOR...IN

// for (const propiedad in persona1) {
//     console.log(propiedad);
// }

// PROPIEDADES Y MÉTODOS CON VARIABLES Y FUNCIONES EXTERNAS
// const IVA = 1.21;

// function saludar() {
//     console.log("Hola, soy " + this.nombre);
// }

// const producto1 = {
//     nombre: "Sillón",
//     color: "Rojo",
//     precio: 50000,
//     iva: IVA,
//     saludar
// }

// producto1.saludar();
// console.log(producto1)