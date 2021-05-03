const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", obtenerPrimos);

let numerosPrimos = [];
let arreglo = "";

function obtenerPrimos() {
    for (let index = 2; index < 1001; index++) {
        let numero = index;
        let isPrimo = validarNumeroPrimo(numero);
        if (isPrimo) {
            numerosPrimos.push(numero);
        }
    }

    let arregloDesc = numerosPrimos.reverse();
    for (let i = 0; i < arregloDesc.length; i++) {
        arreglo += `${arregloDesc[i]}<br>`;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${arreglo}`;
}

function validarNumeroPrimo(numero) {
    for(let divisor = 2; divisor < numero; divisor++) {
        if ((numero % divisor) == 0) {
            return false;
        }
    }
    return true;
}