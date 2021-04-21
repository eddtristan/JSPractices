const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularProduccion);

function calcularProduccion() {
    let produccionAnual = 0;
    let claveFabrica = 1;
    let totalesAnuales = "";
    let produccionSuperior = 0;
    let julioSuperior = "";
    let fabricaSuperior = 0;
    let continuar = true;

    while (continuar) {
        for (let i = 0; i < 12; i++){
            produccionMensual = prompt(`Ingrese la producción de la fabrica ${claveFabrica} del mes ${i+1}`);
            produccionAnual = produccionAnual + Number(produccionMensual);
            if (i == 6 && produccionMensual > 3000000) {
                julioSuperior += `<span>${claveFabrica}</span><br>`;
            }
        }
        totalesAnuales += `<span>El total anual de la fabrica ${claveFabrica} es de ${produccionAnual}</span><br>`;
        if (produccionAnual > produccionSuperior) {
            fabricaSuperior = claveFabrica;
            produccionSuperior = produccionAnual;
        }
        produccionAnual = 0;
        claveFabrica++;
        let pregunta = confirm(`Desea continuar registrando la producción de la fabrica ${claveFabrica}`);
        if (!pregunta) {
            continuar = false;
        }
    }
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${totalesAnuales} <br> La fabrica que tuvo producción superior en el años fue la ${fabricaSuperior} <br><br>
                                    Las fabricas que tuvieron producción superior a $3,000,000 en el mes de julio fueron las siguientes:<br> 
                                    ${julioSuperior}`;
}