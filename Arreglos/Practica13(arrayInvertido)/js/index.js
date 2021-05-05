const inpLongitud = document.getElementById("inpLongitud");
const inpValores = document.getElementById("inpValores");
const btnImprimirArreglos = document.getElementById("btnImprimirArreglos");

inpValores.disabled = true;
btnImprimirArreglos.disabled = true;

inpLongitud.addEventListener("keyup", determinarLongitud);
inpValores.addEventListener("keyup", almacenarValores);
btnImprimirArreglos.addEventListener("click", mostrarValores);

let numerosAlmacenados = [];
let arregloInvertido = [];
let indice = 0;

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
    btnImprimirArreglos.disabled = false;
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

    numerosAlmacenados[indice] = Number(inpValores.value);
    indice++;
    inpValores.value = "";
}

function mostrarValores() {
    
    for (let i = numerosAlmacenados.length; i > 0; i--) {
        arregloInvertido.push(numerosAlmacenados[i-1]);
    }

    let lista = "";
    let listaInvertida = "";
    for (let i = 0; i < numerosAlmacenados.length; i++) {
        lista += "[" + numerosAlmacenados[i] + "] ";
        listaInvertida += "[" + arregloInvertido[i] + "] ";
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El arreglo analizado fue: ${lista}<br><br>
                                    El arreglo invertido resulto: ${listaInvertida}</span>`
}