const inpLongitud = document.getElementById("inpLongitud");
const inpValores = document.getElementById("inpValores");
const btnImprimirValores = document.getElementById("btnImprimirValores");

inpValores.disabled = true;
btnImprimirValores.disabled = true;

inpLongitud.addEventListener("keyup", determinarLongitud);
inpValores.addEventListener("keyup", almacenarValores);
btnImprimirValores.addEventListener("click", mostrarValores);

let longitud = 0;
let indice = 0;
let numerosAlmacenados = [];

function determinarLongitud(event) {
    if (event.key != "Enter") {
        return;
    }
    if (inpLongitud.value == "") {
        alert("Debes ingresar una longitud");
        return;
    }
    if (isNaN(inpLongitud.value)) {
        alert("La longitud debe ser un valor númerico");
        return;
    }
    longitud = Number(inpLongitud.value);
    inpLongitud.disabled = true;
    alert(`El tamaño del arreglo será de ${longitud} valores`);
    inpValores.disabled = false;
    btnImprimirValores.disabled = false;
}

function almacenarValores(event) {
    if (event.key != "Enter") {
        return;
    }
    if (indice == longitud) {
        alert("Se llegó al limite de almacenamiento");
        inpValores.disabled = true;
        inpValores.value = "";
        return;
    }
    if (inpValores.value == "") {
        alert("Debes ingresar un dato para almacenar");
        inpValores.value = "";
        return;
    }
    if (isNaN(inpValores.value)) {
        alert("La longitud debe ser un valor númerico");
        inpValores.value = "";
        return;
    }

    let valor = Number(inpValores.value);
    for (let i = 0; i < numerosAlmacenados.length; i++) {
        if (numerosAlmacenados[i] == valor) {
            alert("Valor repetido, por favor ingresa uno distinto");
            inpValores.value = "";
            return;
        }
    }

    numerosAlmacenados[indice] = Number(inpValores.value);
    indice++;
    inpValores.value = "";
}

function mostrarValores() {
    let lista = "";
    for (let i = 0; i < numerosAlmacenados.length; i++) {
        lista += "[" + numerosAlmacenados[i] + "] ";
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>La lista obtenida fue: ${lista}</span>`
}