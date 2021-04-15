const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", promedioEstatura);

function promedioEstatura() {
    let acumuladorEstatura = 0;
    let contadorEstatura = 0;
    let continuar = true;

    while (continuar) {
        let estatura = prompt(`Ingresa la estatura de la persona ${contadorEstatura+1}`);
        if (estatura == null) {
            continuar = false;
        } else {
            acumuladorEstatura = acumuladorEstatura + Number(estatura);
            contadorEstatura++;
        }
    }

    let promedio = acumuladorEstatura / contadorEstatura;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>La estatura promedio de las ${contadorEstatura} personas es de ${promedio} metros </span>`
}