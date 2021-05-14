const inpNumeros = document.getElementById("inpNumeros");
const btnNumerosAlmacenados = document.getElementById("btnNumerosAlmacenados");
let numerosAlmacenados = [];
let indice = 0;

inpNumeros.addEventListener("keyup", almacenarNumeros);
btnNumerosAlmacenados.addEventListener("click", mosrtrarNumeros);

function almacenarNumeros(event) {
    if (event.key != "Enter") {
        return;
    }

    if (inpNumeros.value == "") {
        alert("Es necesario ingresar un valor");
        return;
    }

    if (isNaN(inpNumeros.value)) {
        alert("Favor de ingresar un valor númerico");
        return;
    }

    if (indice < 10) {
        numerosAlmacenados[indice] = Number(inpNumeros.value);
        indice++;
        inpNumeros.value = "";
    } else {
        alert("Alcanzo el limite de números a guardar");
        inpNumeros.value = "";
    }
}

function mosrtrarNumeros() {
    const lstNumerosAlmacenados = document.getElementById("lstNumerosAlmacenados");
    let mensaje = "";
    for (let indice = 0; indice < numerosAlmacenados.length; indice++){
        mensaje += `<li class="list-group-item">El número en el índice ${indice} es ${numerosAlmacenados[indice]}</li>`;
    }

    lstNumerosAlmacenados.innerHTML = `${mensaje}`;

    numerosAlmacenados = [];
    indice = 0;
}