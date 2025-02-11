// Array donde se guardarán los nombres
let amigos = [];

// Esperar a que la página cargue antes de asignar eventos
document.addEventListener("DOMContentLoaded", function () {
    let botonAgregar = document.getElementById("btnAgregar");
    let botonSortear = document.querySelector(".button-draw");

    if (botonAgregar) {
        botonAgregar.addEventListener("click", agregarAmigo);
        botonAgregar.disabled = true; // Inicialmente deshabilitado
        botonAgregar.style.backgroundColor = "#a1a1a1"; // Gris al inicio
    }

    if (botonSortear) {
        botonSortear.addEventListener("click", sortearAmigo);
    }

    // Habilitar el botón cuando haya texto en el input
    let inputNombre = document.getElementById("amigo");
    inputNombre.addEventListener("input", function () {
        if (inputNombre.value.trim() !== "") {
            botonAgregar.disabled = false;
            botonAgregar.style.backgroundColor = "#4CAF50"; // Verde cuando está listo para agregar
        } else {
            botonAgregar.disabled = true;
            botonAgregar.style.backgroundColor = "#a1a1a1"; // Gris si el input está vacío
        }
    });
});

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let botonAgregar = document.getElementById("btnAgregar");

    if (!nombre) {
        alert("Por favor, debes insertar un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input y deshabilitar botón nuevamente
    input.value = "";
    botonAgregar.disabled = true;
    botonAgregar.style.backgroundColor = "#a1a1a1";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Función para mostrar la lista en HTML
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar y eliminarlo de la lista
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<p>❌ No hay amigos en la lista para sortear.</p>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<p>🎉 El amigo secreto es <strong>${amigoSorteado}</strong> 🎁</p>`;

    // Eliminar el nombre sorteado del array
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista en pantalla
    mostrarLista();
}

