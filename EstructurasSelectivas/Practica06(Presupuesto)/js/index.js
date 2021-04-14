const btnCalcularPresupuesto = document.getElementById("btnCalcularPresupuesto");

btnCalcularPresupuesto.addEventListener("click", calcularPresupuesto);

function calcularPresupuesto() {
    const articulo1 = Number(document.getElementById("inpArticulo1").value);
    const articulo2 = Number(document.getElementById("inpArticulo2").value);
    const articulo3 = Number(document.getElementById("inpArticulo3").value);
    const articulo4 = Number(document.getElementById("inpArticulo4").value);
    const presupuesto = Number(document.getElementById("inpPresupuesto").value);

    let costo = 0;
    let resultado = document.getElementById("resultado");

    costo = articulo1 + articulo2 + articulo3 + articulo4;

    if (presupuesto >= costo) {
        resultado.innerText = `El precio está dentro del presupuesto`;
    } else {
        resultado.innerText = `El precio está fuera del presupuesto`;
    }
}