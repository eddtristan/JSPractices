const inpNumero = document.getElementById("inpNumero");
const btnMostrarValores = document.getElementById("btnMostrarValores");
let numeros = [10];
let indice = 0;

inpNumero.addEventListener("keyup", agregarValor);
btnMostrarValores.addEventListener("click", mostrarMedia);

function agregarValor(event) {
    if (event.key != "Enter") {
        return;
    }

    if (inpNumero.value == "") {
        alert("El campo no debe estar vacío");
        return;
    }

    if (isNaN(inpNumero.value)) {
        alert("Debe ingresar un valor númerico");
        return;
    }

    if (numeros.length == 10) {
        alert("El array esta lleno");
        inpNumero.value = "";
        return;
    }

        numeros[indice] = Number(inpNumero.value);
        indice++;
        inpNumero.value = "";
    
}

function mostrarMedia() {
    let suma = 0;
    for(let i=0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>La media de los números es: ${suma / numeros.length}</span>`;

    numeros = [];
    indice = 0;
}