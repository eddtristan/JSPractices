const btnAPlusB = document.getElementById("btnAPlusB");
const btnBDecA = document.getElementById("btnBDecA");
const btnBProdA = document.getElementById("btnBProdA");
const inpTamaño = document.getElementById("inpTamaño");

let tamaño = 0;
let arrayA = [];
let arrayB = [];
let arrayC = [];
let arrayAPantalla = "";
let arrayBPantalla = "";
let arrayCPantalla = "";

btnAPlusB.addEventListener("click", sumarArreglos);
btnBDecA.addEventListener("click", restarArreglos);
btnBProdA.addEventListener("click", multiplicarArreglos);
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
    for (let i = 0; i < tamaño; i++) {
        arrayA[i] = numeroAleatorio(-100, 100);
        arrayAPantalla += `[${arrayA[i]}] `;
        arrayB[i] = numeroAleatorio(-100, 100);
        arrayBPantalla += `[${arrayB[i]}] `;
    }
}

function sumarArreglos() {
    arrayCPantalla = "";
    for (let i = 0; i < arrayA.length; i++) {
        arrayC[i] = arrayA[i] + arrayB[i];
        arrayCPantalla += `[${arrayC[i]}] `;
    }
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El vector A es el siguiente: <br>${arrayAPantalla}<br>
                                El vector B es el siguiente: <br>${arrayBPantalla}<br>
                                El resultado de sumar A con B es el siguiente:<br>${arrayCPantalla}`;
}

function restarArreglos() {
    arrayCPantalla = "";
    for (let i = 0; i < arrayA.length; i++) {
        arrayC[i] = arrayB[i] - arrayA[i];
        arrayCPantalla += `[${arrayC[i]}] `;
    }
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El vector A es el siguiente: <br>${arrayAPantalla}<br>
                                El vector B es el siguiente: <br>${arrayBPantalla}<br>
                                El resultado de restar B con A es el siguiente:<br>${arrayCPantalla}`;
}

function multiplicarArreglos() {
    arrayCPantalla = "";
    for (let i = 0; i < arrayA.length; i++) {
        arrayC[i] = arrayB[i] * arrayA[i];
        arrayCPantalla += `[${arrayC[i]}] `;
    }
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El vector A es el siguiente: <br>${arrayAPantalla}<br>
                                El vector B es el siguiente: <br>${arrayBPantalla}<br>
                                El resultado de multiplicar B con A es el siguiente:<br>${arrayCPantalla}`;
}