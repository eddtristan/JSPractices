const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", revisarPrimos);

function revisarPrimos() {
    let numero = Number(prompt("Ingrese un número para encontrar la cantidad de números primos que tiene"));
    let auxiliarDividendos = 0;
    let contadorPrimos = 0;

    for (let i = numero; i > 1; i--){
        for (let k = numero; k > 0; k--){
            if ((i % k) == 0) {
                auxiliarDividendos++;
            }
        }
        if (auxiliarDividendos < 3) {
            contadorPrimos++;
        }
        auxiliarDividendos = 0;
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<li class="list-group-item">La cantidad de números primos que hay menores a ${numero} es de ${contadorPrimos}</li>`;

}