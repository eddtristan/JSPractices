const btnCalcularPresupuesto = document.getElementById("btnCalcularPresupuesto");

btnCalcularPresupuesto.addEventListener("click", calcularPresupuesto);

function calcularPresupuesto() {
    const inpPersonas = Number(document.getElementById("inpPersonas").value);

    let presupuesto = 0;
    let resultado = document.getElementById("resultado");

    if (inpPersonas > 200 && inpPersonas <= 300) {
        presupuesto = inpPersonas * 85;
        resultado.innerHTML = `<div class="alert alert-warning" role="alert">El costo seria de $${presupuesto}</div>`;
    } else if (inpPersonas > 300) {
        presupuesto = inpPersonas * 75;
        resultado.innerHTML = `<div class="alert alert-success" role="alert">El costo seria de $${presupuesto}</div>`;
    } else {
        presupuesto = inpPersonas * 95;
        resultado.innerHTML = `<div class="alert alert-danger" role="alert">El costo seria de $${presupuesto}</div>`;
    }
}