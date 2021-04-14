const btnCalcularIcentivos = document.getElementById("btnCalcularIcentivos");

btnCalcularIcentivos.addEventListener("click", calcularIncentivos);

function calcularIncentivos() {
    const unidades = Number(document.getElementById("inpUnidades").value);

    let resultado = document.getElementById("resultado");

    if (unidades >= 100){
        resultado.innerText = `El operario si recibirá incentivos esta semana`;
    } else {
        resultado.innerText = `El operario no recibirá incentivos esta semana`;
    }
}