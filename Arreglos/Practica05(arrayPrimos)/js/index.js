const inpLongitud = document.getElementById("inpLongitud");
const btnImprimirValores = document.getElementById("btnImprimirValores");

btnImprimirValores.addEventListener("click", imprimirArreglo);
inpLongitud.addEventListener("keyup", almacenarNumerosPrimos);

let numerosPrimos = [];
let mayor = 0;
let arreglo = "";

function almacenarNumerosPrimos(event) {
    if (event.key != "Enter") {
        return;
    }
    if (inpLongitud.value == "") {
        alert("Debes ingresar una longitud");
        return;
    }
    if (isNaN(inpLongitud.value)) {
        alert("La longitud debe ser un valor númerico");
        return;
    }
    longitud = Number(inpLongitud.value);
    inpLongitud.disabled = true;
    alert(`El tamaño del arreglo será de ${longitud} valores`);

    console.time("Tiempo");
    for (let index = 0; index < longitud; index++) {
        let numero = Math.floor(Math.random() * (100 -1 + 1) + 1);
        let isPrimo = validarNumeroPrimo(numero);
        if (isPrimo) {
            numerosPrimos[index] = numero;
            if (mayor <= numero) {
                mayor = numero;
            }
        } else {
            index--;
        }
    }
    console.timeEnd("Tiempo");
}

function validarNumeroPrimo(numero) {
    for(let divisor = 2; divisor < numero; divisor++) {
        if ((numero % divisor) == 0) {
            return false;
        }
    }
    return true;
}

function imprimirArreglo() {
    arreglo += `<span><strong>Índice</strong> Valor</span><br>`;
    for (let i = 0; i < numerosPrimos.length; i++) {
        arreglo += `<span><strong>${i}</strong>\t${numerosPrimos[i]}</span><br>`;
    }
    arreglo += `<br>El número más grande del arreglo es el: ${mayor}`;

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${arreglo}`;
}