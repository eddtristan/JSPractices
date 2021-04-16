const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", imprimirCienNumeros);

function imprimirCienNumeros() {
    let resultadoAcumulado = "";
    for (let i = 100; i >= 0; i--) {
        resultadoAcumulado += `<li class="list-group-item">${i}</li>`;
    }
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = resultadoAcumulado;
}