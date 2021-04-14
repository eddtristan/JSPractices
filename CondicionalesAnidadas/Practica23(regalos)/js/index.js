const btnBuscarRegalos = document.getElementById("btnBuscarRegalos");

btnBuscarRegalos.addEventListener("click", buscarRegalos);

function buscarRegalos() {
    const presupuesto = Number(document.getElementById("inpPresupuesto").value);

    let resultado = document.getElementById("resultado");

    if (presupuesto <= 10) {
        resultado.innerText = `El regalo que puedes obsequiar es una tarjeta`;
    } else if (presupuesto > 10 && presupuesto <= 100) {
        resultado.innerText = `El regalo que puedes obsequiar es unos chocolates`;
    } else if (presupuesto > 100 && presupuesto <= 250) {
        resultado.innerText = `El regalo que puedes obsequiar es unas flores`;
    } else {
        resultado.innerText = `El regalo que puedes obsequiar es un anillo`;
    }
}