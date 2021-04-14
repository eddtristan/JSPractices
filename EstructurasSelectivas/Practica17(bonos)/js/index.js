const btnCalcularBono = document.getElementById("btnCalcularBono");

btnCalcularBono.addEventListener("click", calcularBono);

function calcularBono() {
    const sueldo = Number(document.getElementById("inpSueldo").value);
    const antiguedad = document.getElementById("sltAños").value;

    let resultado = document.getElementById("resultado");

    if (antiguedad == "reciente") {
        if (sueldo < 1000) {
            resultado.innerText = `El bono correspondiente es de $${sueldo * 0.25}`;
        } else if (sueldo > 1000 && sueldo <= 3500) {
            resultado.innerText = `El bono correspondiente es de $${sueldo * 0.15}`;
        } else {
            resultado.innerText = `El bono correspondiente es de $${sueldo * 0.1}`;
        }
    } else if (antiguedad == "conocido") {
        if (sueldo < 1000) {
            resultado.innerText = `El bono correspondiente es de $${sueldo * 0.25}`;
        } else {
            resultado.innerText = `El bono correspondiente es de $${sueldo * 0.20}`;
        }
    } else {
        resultado.innerText = `El bono correspondiente es de $${sueldo * 0.3}`;
    }
}