const btnGenerarArreglo = document.getElementById("btnGenerarArreglo");

let tamaño = 30;
let array = [];
let arrayImpares = [];
let arrayImparesPantalla = "";
let arrayPantalla = "";

btnGenerarArreglo.addEventListener("click", generarArreglo);

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function generarArreglo() {
    for (let i = 0; i < tamaño; i++) {
        array[i] = numeroAleatorio(100, 300);
        arrayPantalla += `[${array[i]}] `;
    }

    generarArregloImpares(array);
}

function generarArregloImpares(array) {
    for (let i = 0; i < tamaño; i++) {
        if ((array[i] % 2) != 0) {
            arrayImpares.push(array[i]);
        }
    }
    for (let i = 0; i < arrayImpares.length; i++) {
        arrayImparesPantalla += `[${arrayImpares[i]}] `;
    }
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El arreglo es el siguiente: <br> ${arrayPantalla}<br><br>
                                    El arreglo con los impares es el siguiente: ${arrayImparesPantalla}</span>`;
}