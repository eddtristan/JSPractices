const btnCalcularCosto = document.getElementById("btnCalcularCosto");

btnCalcularCosto.addEventListener("click", calcularCosto);

function calcularCosto() {
    const horas = Number(document.getElementById("inpHoras").value);
    let costo = 0;
    let horasRestantes = 0;

    let resultado = document.getElementById("resultado");

    if (horas > 0 && horas <= 2) {
        costo = horas * 5;
        resultado.innerText = `El costo a pagar es de $${costo}`;
    } else if (horas > 2 && horas <=5) {
        horasRestantes = horas - 2;
        costo = horasRestantes * 4 + 10;
        resultado.innerText = `El costo a pagar es de $${costo}`;
    } else if (horas > 5 && horas <= 10) {
        horasRestantes = horas - 5;
        costo = horasRestantes * 3 + 22;
        resultado.innerText = `El costo a pagar es de $${costo}`;
    } else if (horas > 10){
        horasRestantes = horas - 10;
        costo = horasRestantes * 2 + 37;
        resultado.innerText = `El costo a pagar es de $${costo}`;
    }
}