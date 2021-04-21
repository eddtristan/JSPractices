const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", impuestoAutomotriz);

function impuestoAutomotriz() {
    let totalClave1 = 0;
    let totalClave2 = 0;
    let totalClave3 = 0;
    let total = 0;
    let autosClave1 = "";
    let autosClave2 = "";
    let autosClave3 = "";
    let continuar = true;

    
    for (let i = 0; i < 3; i++){
        continuar = true;
        while (continuar) {
            let costo = prompt(`Ingresa el costo de un automóvil de clave ${i+1}`);
            if (costo == null) {
                let pregunta = confirm(`Deseas registrar otro vehículo de clave ${i+1}?`);
                if (!pregunta) {
                    continuar = false;
                }
            } else {
                if (i == 0) {
                    totalClave1 = totalClave1 + (Number(costo) * 0.1);
                    total = total + (Number(costo) * 0.1);
                    autosClave1 += `<span>Pagara $${Number(costo) * 0.1} de impuesto(0.1%) por auto de clave ${i+1}</span><br>`;
                } else if (i == 1) {
                    totalClave2 = totalClave2 + (Number(costo) * 0.07);
                    total = total + (Number(costo) * 0.07);
                    autosClave2 += `<span>Pagara $${Number(costo) * 0.07} de impuesto(0.07%) por auto de clave ${i+1}</span><br>`;
                } else {
                    totalClave3 = totalClave3 + (Number(costo) * 0.05);
                    total = total + (Number(costo) * 0.05);
                    autosClave3 += `<span>Pagara $${Number(costo) * 0.05} de impuesto(0.05%) por auto de clave ${i+1}</span><br>`;
                }
            }
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `Los impuestos de cada uno de los autos de clave 1 son: <br> ${autosClave1}<br>
                                    Los impuestos de cada uno de los autos de clave 2 son: <br> ${autosClave2}<br>
                                    Los impuestos de cada uno de los autos de clave 3 son: <br> ${autosClave3}<br>
                                    El total a pagar de los autos de clave 1 es de: $${totalClave1}<br><br>
                                    El total a pagar de los autos de clave 2 es de: $${totalClave2}<br><br>
                                    El total a pagar de los autos de clave 3 es de: $${totalClave3}<br><br>
                                    El total absoluto a pagar de impuesto es de: $${total}`;

}