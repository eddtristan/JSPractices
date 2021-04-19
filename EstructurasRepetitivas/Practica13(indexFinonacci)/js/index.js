const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", indexFibonacci);

function indexFibonacci() {
    let numero = Number(prompt("Ingrese el índex que desea obtener de la serie FIBONACCI"));
    let contador = 0;
    let auxiliar = 0;
    let auxiliarDos = 1;
    let serie = 0;
    let continuar = true;

    if (numero < 0) {
        alert("Ingrese un número positivo");
        return;
    }

    while (continuar) {
        if (contador == numero) {
            continuar = false;
        } else {
            serie = auxiliar + auxiliarDos;
            auxiliar = auxiliarDos;
            auxiliarDos = serie;
            contador++;
        }
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<li class="list-group-item">El número correspondiente al índex ${numero} es el: ${serie}</li>`;

}