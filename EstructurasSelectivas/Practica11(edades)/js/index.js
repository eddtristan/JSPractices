const btnCalcularDiferencia = document.getElementById("btnCalcularDiferencia");

btnCalcularDiferencia.addEventListener("click", calcularDiferencia);

function calcularDiferencia() {
    const edad1 = Number(document.getElementById("inpEdad1").value);
    const edad2 = Number(document.getElementById("inpEdad2").value);

    let resultado = document.getElementById("resultado");

    if (edad1 > edad2) {
        resultado.innerText = `El hermano 1 es más grande por ${edad1 - edad2} años`;
    } else if (edad2 > edad1) {
        resultado.innerText = `El hermano 2 es más grande por ${edad2 - edad1} años`;
    } else {
        resultado.innerText = `Los hermanos son de la misma edad`;
    }
}