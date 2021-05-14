const btnGenerarArreglo = document.getElementById("btnGenerarArreglo");
const inpTamaño = document.getElementById("inpTamaño");

let tamaño = 0;
let arrayA = [];
let arrayB = [];
let arrayC = [];
let arrayPantallaA = "";
let arrayPantallaB = "";
let arrayPantallaC = "";

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
        arrayA[i] = numeroAleatorio(0, 100);
        arrayB[i] = numeroAleatorio(0, 100);
        arrayPantallaA += `[${arrayA[i]}] `;
        arrayPantallaB += `[${arrayB[i]}] `;
    }

    for (let i = 0; i < arrayA.length; i++) {
        arrayC[i] = arrayA[i];
    }

    for (let i = 0; i < arrayB.length; i++) {
        arrayC.push(arrayB[i]);
    }

    arrayC.sort((a,b)=>b-a);

    for (let i = 0; i < arrayC.length; i++) {
        arrayPantallaC += `[${arrayC[i]}] `;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El arreglo A es el siguiente: <br> ${arrayPantallaA}<br><br>
                                        El arreglo B es el siguiente: <br> ${arrayPantallaB}<br><br>
                                        El arreglo C quedo así: <br> ${arrayPantallaC} </span>`
}