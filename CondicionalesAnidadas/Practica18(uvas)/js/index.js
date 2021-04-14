const btnVender = document.getElementById("btnVender");

btnVender.addEventListener("click", venderUvas);

function venderUvas() {
    const tipoUva = document.getElementById("sltTipo").value;
    const tamañoUva = document.getElementById("sltTamaño").value;
    const kilos = Number(document.getElementById("inpKilos").value);
    let pago = 0;

    let resultado = document.getElementById("resultado");

    if (tipoUva == "tipoA") {
        if (tamañoUva == "tamaño1"){
            pago = 10.2 * kilos;
            resultado.innerText = `El precio que se le pagara por dicho embarque será de: $${Math.round(pago)}`;
        } else {
            pago = 10.3 * kilos;
            resultado.innerText = `El precio que se le pagara por dicho embarque será de: $${Math.round(pago)}`;
        }
    } else {
        if (tamañoUva == "tamaño1"){
            pago = 5.7 * kilos;
            resultado.innerText = `El precio que se le pagara por dicho embarque será de: $${Math.round(pago)}`;
        } else {
            pago = 5.5 * kilos;
            resultado.innerText = `El precio que se le pagara por dicho embarque será de: $${Math.round(pago)}`;
        }
    }
}