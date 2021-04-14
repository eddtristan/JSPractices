const btnCalcularPromedio = document.getElementById("btnCalcularPromedio");

btnCalcularPromedio.addEventListener("click", calcularPromedio);

function calcularPromedio() {
    const inpCalificacion1 = Number(document.getElementById("inpCalificacion1").value);
    const inpCalificacion2 = Number(document.getElementById("inpCalificacion2").value);
    const inpCalificacion3 = Number(document.getElementById("inpCalificacion3").value);
    let promedio = 0;

    let resultado = document.getElementById("resultado");

    promedio = (inpCalificacion1 + inpCalificacion2 + inpCalificacion3) / 3;

    if (promedio >= 9) {
        resultado.innerHTML = `Aprobado`;
    } else if (promedio >= 6 && promedio < 9) {
        resultado.innerHTML = `Regular`;
    } else if (promedio < 6) {
        resultado.innerHTML = `Reprobado`;
    }
}