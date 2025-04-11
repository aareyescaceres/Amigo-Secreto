const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre || amigos.includes(nombre)) {
        alert(!nombre ? "Por favor, ingresa un nombre válido." : "Este nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Función para actualizar la lista
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un solo amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }
    
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado
function mostrarResultado(amigoSorteado) {
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}