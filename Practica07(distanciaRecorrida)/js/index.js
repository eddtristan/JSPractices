const btnCalcularDistancia = document.getElementById("btnDistancia");

btnCalcularDistancia.addEventListener("click", distanciaRecorrida);

function distanciaRecorrida() {
    const velocidad = Number(document.getElementById("velocidad").value);
    const tiempo = Number(document.getElementById("tiempo").value);

    let distancia = velocidad * tiempo;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>La distancia recorrida es de:</em> ${distancia}`;
}