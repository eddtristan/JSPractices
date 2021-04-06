const btnCalcularDescuento = document.getElementById("btnCalcularDescuento");

btnCalcularDescuento.addEventListener("click", calcularDescuento);

function calcularDescuento() {
    const inpCostoCompra = Number(document.getElementById("inpCostoCompra").value);

    const resultado = document.getElementById("resultado");
    let descuento = 0;

    if(inpCostoCompra>1000){
        descuento = inpCostoCompra * 0.8;
    } else {
        descuento = inpCostoCompra;
    }

    resultado.innerHTML = `El monto a pagar es de ${descuento}`;
}