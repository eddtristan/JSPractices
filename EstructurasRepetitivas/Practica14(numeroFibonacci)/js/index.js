const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", serieFibonacci);

function serieFibonacci() {
    let numero = Number(prompt("Ingrese el índex que desea obtener de la serie FIBONACCI"));
    let contador = 0;
    let auxiliar = 0;
    let auxiliarDos = 1;
    let numeroFibonacci = 0;
    let continuar = true;
    let serie = "";

    if (numero < 0) {
        alert("Ingrese un número positivo");
        return;
    }

    while (continuar) {
        if (contador == numero) {
            continuar = false;
        } else {
            numeroFibonacci = auxiliar + auxiliarDos;
            auxiliar = auxiliarDos;
            auxiliarDos = numeroFibonacci;
            serie += `<li class="list-group-item">${numeroFibonacci}</li>`;
            contador++;
        }
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${serie}`;
}