const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularAhorro);

function calcularAhorro() {
    let ahorroAcumulado = 0;
    let resultadoAcumuladorMensajes = "";

    for (let i=0; i<12; i++) {
        let ahorroMensual = Number(prompt(`Ingrese el ahorro del mes ${i}`));
        ahorroAcumulado = ahorroAcumulado + ahorroMensual;
        resultadoAcumuladorMensajes += `<li class="list-group-item">El ahorro acumulado en el mes ${i} es: ${ahorroAcumulado}</li>`;
    }

    const listaAcumulacionMensual = document.getElementById("acumulacionMensual");
    listaAcumulacionMensual.innerHTML = resultadoAcumuladorMensajes;

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El ahorro que se acumulo en el año es de: ${ahorroAcumulado}`;
}