const btnInitApp = document.getElementById("btnInitApp");
const inpTamaño = document.getElementById("inpTamaño");

btnInitApp.addEventListener("click", agregarNumeros);
inpTamaño.addEventListener("keyup", tamañoArreglo);

let array = [];
let arrayPantalla = "";
let arrayNumeros = [];
let arrayNumerosPantalla = "";
let indice = 0;
let continuar = true;

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

function agregarNumeros() {

    for (let i = 0; i < tamaño; i++) {
        array[i] = numeroAleatorio(0, 100);
        arrayPantalla += `[${array[i]}] `;
    }

    arrayFiltrado(array);
}

function arrayFiltrado(arreglo) {
    arrayNumeros = arreglo.filter((e) => (e % 2) == 0);

    for (let i = 0; i < arrayNumeros.length; i++) {
        arrayNumerosPantalla +=  `[${arrayNumeros[i]}] `;
    }
    
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El arreglo inicial contiene los siguientes números:<br>${arrayPantalla}<br><br>
                                Después de filtrarlo para obtener los números pares:<br>${arrayNumerosPantalla}`;
    
}