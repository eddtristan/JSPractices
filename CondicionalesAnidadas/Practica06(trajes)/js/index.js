const btnCalcularDescuento = document.getElementById("btnCalcularDescuento");

btnCalcularDescuento.addEventListener("click", calcularDescuento);

function calcularDescuento() {
    const precioTraje = Number(document.getElementById("inpPrecioTraje").value);

    let descuento = 0;
    let resultado = document.getElementById("resultado");

    if (precioTraje >= 3600) {
        descuento = precioTraje * 0.84;
        resultado.innerText = `El precio a pagar es de $${descuento} (16% de descuento)`;
    } else {
        descuento = precioTraje * 0.93;
        resultado.innerText = `El precio a pagar es de $${descuento} (7% de descuento)`;
    }
}