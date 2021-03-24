const btnCosto = document.getElementById("btnCosto");

btnCosto.addEventListener("click", calcularCosto);

function calcularCosto() {
    const metros = Number(document.getElementById("metros").value);
    const precio = Number(document.getElementById("precio").value);

    let volumen = precio * Math.pow(metros, 3);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>El precio de llenar la alberca es de:</em> ${volumen}`;
}