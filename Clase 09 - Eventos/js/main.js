/**** EVENTOS ****/

/*** EVENTOS DEL MOUSE ***/

// Mostrar mensaje en una alerta -- Haciendo referencia a la función
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    alert("Hola, mundo!");
}

// Mostrar mensaje en la consola -- Escribir una función anónima
const consola = document.querySelector("#consola");
consola.addEventListener("click", (event) => {
    console.log(event);
})

// Agregar clase a un elemento -- Switch Color Mode
const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiarModoColor);
function cambiarModoColor() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Cambiar a Light Mode";
    } else {
        colorModeButton.innerText = "Cambiar a Dark Mode";
    }
}

/*** EVENTOS DE FORMULARIOS ***/

// Mostrar input en alerta
const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(alertaInput.value);
    alertaForm.reset();
});

// Mostrar un texto abajo de un input
const abajoInput = document.querySelector("#abajo-input");
const abajo = document.querySelector("#abajo");

abajoInput.addEventListener("input", () => {
    abajo.innerText = abajoInput.value;
})

// Agregar ítems a una lista
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");

agregarForm.addEventListener("submit", agregarItems);

function agregarItems(e) {
    e.preventDefault();

    if (agregarInput.value != "") {
        let item = document.createElement("li");
        item.innerText = agregarInput.value;
    
        agregar.append(item);
    } else {
        alert("Input vacío!")
    }

    agregarInput.focus();
    agregarForm.reset();
}