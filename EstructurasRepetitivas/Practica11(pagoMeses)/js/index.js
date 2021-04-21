const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularMensualidad);

function calcularMensualidad() {
    let pagoInicial = 5;
    let pagoMensual = 0;
    let pagoTotal = 0;
    let registro = "";

    for (let i = 0; i < 20; i++) {
        pagoMensual = pagoInicial * 2;
        pagoInicial = pagoMensual;
        pagoTotal = pagoTotal + pagoMensual;
        registro += `<li class="list-group-item">El pago del mes ${i+1} es de $${pagoMensual}</li>`;
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${registro}`;

}