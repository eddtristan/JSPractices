const inpLongitud = document.getElementById("inpLongitud");
const inpValores = document.getElementById("inpValores");
const btnImprimirEstadisticas = document.getElementById("btnImprimirEstadisticas");

inpValores.disabled = true;
btnImprimirEstadisticas.disabled = true;

inpLongitud.addEventListener("keyup", determinarLongitud);
inpValores.addEventListener("keyup", almacenarValores);
btnImprimirEstadisticas.addEventListener("click", mostrarValores);

let longitud = 0;
let indice = 0;
let numerosAlmacenados = [];
let mediana = 0;
let media = 0;
let moda = 0;
let varianza = 0;

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
    btnImprimirEstadisticas.disabled = false;
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
    numerosAlmacenados.sort((a,b)=>a-b);

    calcularMediana(numerosAlmacenados);
    calcularMedia(numerosAlmacenados);
    calcularModa(numerosAlmacenados);
    calcularVarianza(numerosAlmacenados);

    let lista = "";
    for (let i = 0; i < numerosAlmacenados.length; i++) {
        lista += "[" + numerosAlmacenados[i] + "] ";
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El arreglo analizado fue: ${lista}<br><br>
                                    La media fue: ${media}, La mediana fue: ${mediana} y la moda fue: ${moda}<br><br>
                                    La varianza fue: ${varianza.toPrecision(3)} y la desviacion estandar fue: ${Math.sqrt(varianza).toPrecision(3)}</span>`
}

function calcularMediana(array) {
    if ((array.length % 2) == 0) {
        let mitad = array.length / 2;
        mediana = (array[mitad] + array[mitad + 1]) / 2;
    } else {
        let mitad = Math.round(array.length / 2);
        mediana = array[mitad];
    }
}

function calcularMedia(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    media = (suma / array.length).toPrecision(4);
}

function calcularModa(array) {
    let contador = 0;
    let modaActual = 0;
    let valorModa = 0;
    let repeticiones = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                contador++;
            }
        }
        if (contador >= modaActual) {
            repeticiones = contador;
            modaActual = contador;
            valorModa = array[i];
        }
        contador = 0;
    }

    if(modaActual < 2) {
        moda = 0;
    } else {
        moda = valorModa;
    }
}

function calcularVarianza(array) {
    let diferencia = Math.round(media);

    for (let i = 0; i < array.length; i++) {
        varianza = varianza + Math.pow((array[i] - diferencia), 2);
    }
    varianza = varianza / array.length;
}