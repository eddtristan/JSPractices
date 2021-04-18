const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", horasTrabajadas);

function horasTrabajadas() {
    let totalHoras = 0;
    let precioHora = 70;
    let pago = 0;

    for (let i = 0; i < 6; i++) {
        let hora = Number(prompt(`Ingrese las horas trabajadas el día ${i+1}`));
        totalHoras = totalHoras + hora;
    }
    pago = precioHora * totalHoras;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El total de horas trabajadas fue de ${totalHoras} y el pago correspondiente es de $${pago}</span>`;
}