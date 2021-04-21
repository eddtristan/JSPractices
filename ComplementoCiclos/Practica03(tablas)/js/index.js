const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", obtenerTabla);

function obtenerTabla() {
    let numero = Number(prompt("Ingresa un número entre el 1 y 10 para imprimir la tabla de multiplicar"));
    let tabla = "";

    for (let i = 0; i < 10; i++) {
        tabla += `<span>${numero} * ${i+1} = ${numero * (i+1)}</span><br>`;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${tabla}`;
}