const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSumatoria);

function calcularSumatoria() {
    let resultado = 0;

    for (let i = 0; i<10; i++) {
        let numero = Number(prompt(`Ingrese el numero ${i+1}`));

        resultado = resultado + numero;
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>La suma de los 10 números es: ${resultado}</span>`;
}