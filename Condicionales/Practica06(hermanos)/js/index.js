const btnCalcularDiferencia = document.getElementById("btnCalcularDiferencia");

btnCalcularDiferencia.addEventListener("click", calcularDiferencia);

function calcularDiferencia() {
    const inpEdad1 = Number(document.getElementById("inpEdad1").value);
    const inpEdad2 = Number(document.getElementById("inpEdad2").value);
    let diferencia = 0;

    const resultado = document.getElementById("resultado");

    if (inpEdad1 > inpEdad2) {
        diferencia = inpEdad1 - inpEdad2;
        resultado.innerHTML = `El hermano 1 es el mayor con ${inpEdad1} años
                                y es ${diferencia} años mas grande que su hermano`;
    } else {
        diferencia = inpEdad2 - inpEdad1;
        resultado.innerHTML = `El hermano 2 es el mayor con ${inpEdad2} años
                                y es ${diferencia} años mas grande que su hermano`;
    }
}