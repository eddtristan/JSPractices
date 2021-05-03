const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", invertirPalabra);

let array = [];
let arrayInvertido = [];
let palabraInvertida = "";
let indice = 0;

function invertirPalabra() {
    let palabra = prompt(`Ingresa una palabra para almacenar en el arreglo en la posición ${indice+1}:`);
    if (palabra == "") {
        alert("Debes ingresar algo de texto");
    } else {
        array.push(palabra);
    }

    for (let i = array[0].length - 1; i >= 0; i--) {
        arrayInvertido.push(array[0].charAt(i));
    }

    for (let i = 0; i < arrayInvertido.length; i++) {
        palabraInvertida += arrayInvertido[i];
    }
    
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `Palabra inicial: ${array}, palabra invertida: ${palabraInvertida}`;

}