const btnCalcularAumento = document.getElementById("btnCalcularAumento");

btnCalcularAumento.addEventListener("click", calcularAumento);

function calcularAumento() {
    let sltTipoTarjeta = document.getElementById("sltTipoTarjeta").value;
    const inpCreditoActual = Number(document.getElementById("inpCreditoActual").value);

    let resultado = document.getElementById("resultado");
    let aumento = 0;

    if(inpCreditoActual == "" || inpCreditoActual == 0){
        alert("Es necesario ingresar el credito actual");
        return;
    }

    if (sltTipoTarjeta == "tipo1") {
        aumento = inpCreditoActual * 1.25;
    } else if (sltTipoTarjeta == "tipo2") {
        aumento = inpCreditoActual * 1.35;
    } else if (sltTipoTarjeta == "tipo3") {
        aumento = inpCreditoActual * 1.40;
    } else {
        aumento = inpCreditoActual * 1.50;
    }

    resultado.innerHTML = `<div class="alert alert-success">Tu nuevo limite de credito es de $${aumento}</div>`;
}