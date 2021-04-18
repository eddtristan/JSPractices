const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularIntercepcion);

function calcularIntercepcion() {
    let aZacatecas = 70;
    let aAguascalientes = 150;
    let distancia = aAguascalientes - aZacatecas;

    while (distancia > 0) {
        aZacatecas++;
        aAguascalientes--;
        distancia = aAguascalientes - aZacatecas;
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El punto de encuentro es el km ${aZacatecas}</span>`
}