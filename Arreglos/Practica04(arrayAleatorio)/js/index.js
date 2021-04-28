const btnGenerarArreglo = document.getElementById("btnGenerarArreglo");
const inpTamaño = document.getElementById("inpTamaño");

let tamaño = 0;
let suma = 0;
let array = [];
let arrayPantalla = "";

btnGenerarArreglo.addEventListener("click", generarArreglo);
inpTamaño.addEventListener("keyup", tamañoArreglo);

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function tamañoArreglo(event) {
    if (event.key != "Enter") {
        return;
    }
    if (inpTamaño.value == "") {
        alert("Debes ingresar una longitud");
        return;
    }
    if (isNaN(inpTamaño.value)) {
        alert("La longitud debe ser un valor númerico");
        return;
    }
    tamaño = Number(inpTamaño.value);
    inpTamaño.disabled = true;
    alert(`El tamaño del arreglo será de ${tamaño} valores`);
}

function generarArreglo() {
    for (let i = 0; i < tamaño; i++) {
        array[i] = numeroAleatorio(0, 9);
        arrayPantalla += `[${array[i]}] `;
        suma = suma + array[i];
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El arreglo es el siguiente: <br> ${arrayPantalla}<br> La suma de todos los valore es: ${suma} </span>`
}