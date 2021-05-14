const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", invertirPalabra);

let palabraEncriptada = "";
let codigos = [];
let indice = 0;

function invertirPalabra() {
    let palabra = prompt(`Ingresa una palabra para encriptarla:`);
    if (palabra == "") {
        alert("Debes ingresar algo de texto");
    } 

    for (let i = 0; i < palabra.length ; i++) {
        let ascii = palabra.charCodeAt(i) + 3;
        codigos.push(ascii);
    }

    for (let i = 0; i < codigos.length; i++) {
        palabraEncriptada += String.fromCharCode(codigos[i]);
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `La palabra quedo así: ${palabraEncriptada}`;

}