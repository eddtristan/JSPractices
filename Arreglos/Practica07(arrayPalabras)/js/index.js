const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", agregarPalabra);

let array = [];
let arrayPantalla = "";
let arrayVocales = [];
let arrayVocalesPantalla = "";
let indice = 0;
let continuar = true;

function agregarPalabra() {
    while (continuar) {
        let palabra = prompt(`Ingresa una palabra para almacenar en el arreglo en la posición ${indice+1}:`);
        if (palabra == "") {
            alert("Debes ingresar algo de texto");
        } else if (palabra == null) {
            continuar = false;
        } else {
            array[indice] = palabra;
            indice++;
        }
    }
    console.log(arrayVocales);
    arrayFiltrado(array);
}

function arrayFiltrado(arreglo) {
    arrayVocales = arreglo.filter((e) => e[0] == "A" || e[0] == "a" || e[0] == "E" || e[0] == "e" 
        || e[0] == "I" || e[0] == "i" || e[0] == "O" || e[0] == "o" || e[0] == "U" || e[0] == "u");

    for (let i = 0; i < array.length; i++) {
        arrayPantalla +=  `["${arreglo[i]}"] `;
    }

    for (let i = 0; i < arrayVocales.length; i++) {
        arrayVocalesPantalla +=  `["${arrayVocales[i]}"] `;
    }
    
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El arreglo inicial contiene las siguientes palabras:<br>${arrayPantalla}<br><br>
                                Después de filtrarlo para obtener las palabras que inician con vocales quedo así:<br>${arrayVocalesPantalla}`;
    
}