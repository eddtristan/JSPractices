const btnGenerarArreglo = document.getElementById("btnGenerarArreglo");

let tamaño = 30;
let arrayA = [];
let arrayB = [];
let arrayPantallaA = "";
let arrayPantallaB = "";

btnGenerarArreglo.addEventListener("click", generarArreglo);

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function generarArreglo() {
    for (let i = 0; i < tamaño; i++) {
        arrayA[i] = numeroAleatorio(1, 100);
        arrayPantallaA += `[${arrayA[i]}] `;
    }

    for (let i = 0; i < arrayA.length; i++) {
        if ((arrayA[i] % 7) == 0) {
            arrayB.push(arrayA[i]);
        }
    }

    for (let i = 0; i < arrayB.length; i++) {
        arrayPantallaB += `[${arrayB[i]}] `;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El arreglo A es el siguiente: <br> ${arrayPantallaA}<br><br>
                                        El arreglo B con múltiplos de 7 es el siguiente: <br> ${arrayPantallaB} </span>`;
}