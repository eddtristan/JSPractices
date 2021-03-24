const btnDistancia = document.getElementById("btnDistancia");

btnDistancia.addEventListener("click", calcularDistancia);

function calcularDistancia() {
    const xUno = Number(document.getElementById("xUno").value);
    const yUno = Number(document.getElementById("yUno").value);
    const xDos = Number(document.getElementById("xDos").value);
    const yDos = Number(document.getElementById("yDos").value);

    let distancia = Math.sqrt(Math.pow((xDos - xUno), 2) + Math.pow((yDos - yUno), 2));

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>La distancia entre los puntos es de:</em> ${distancia}`;
}