const btnCalcularCosto = document.getElementById("btnCalcularCosto");

btnCalcularCosto.addEventListener("click", calcularCosto);

function calcularCosto() {
    const peso = Number(document.getElementById("inpPeso").value);
    const zona = document.getElementById("sltZona").value;
    let costo = 0;

    let resultado = document.getElementById("resultado");
    
    if (peso <= 5000) {
        if (zona == "norteamerica") {
            costo = peso * 11;
            resultado.innerText = `El costo de envío de su paquete es de $${costo}`;
        } else if (zona == "centroamerica") {
            costo = peso * 10;
            resultado.innerText = `El costo de envío de su paquete es de $${costo}`;
        } else if (zona == "sudamerica") {
            costo = peso * 12;
            resultado.innerText = `El costo de envío de su paquete es de $${costo}`;
        } else if (zona == "europa") {
            costo = peso * 24;
            resultado.innerText = `El costo de envío de su paquete es de $${costo}`;
        } else {
            costo = peso * 27;
            resultado.innerText = `El costo de envío de su paquete es de $${costo}`;
        }
    } else {
        resultado.innerText = `Lo sentimos, el peso del paquete no debe superar los 5kg`;
    }
}