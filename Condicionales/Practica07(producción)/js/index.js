const btnCalcularIncentivos = document.getElementById("btnCalcularIncentivos");

btnCalcularIncentivos.addEventListener("click", calcularIncentivos);

function calcularIncentivos() {
    const inpProduccion = Number(document.getElementById("inpProduccion").value);

    const resultado = document.getElementById("resultado");

    if (inpProduccion > 100) {
        resultado.innerHTML = `El operario si recibirá incentivos esta semana`;
    } else {
        resultado.innerHTML = `El operario no recibirá incentivos esta semana`;
    }
}