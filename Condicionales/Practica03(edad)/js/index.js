const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", revisarEdades);

function revisarEdades() {
    const inpNombre1 = document.getElementById("inpNombre1").value;
    const inpEdad1 = Number(document.getElementById("inpEdad1").value);
    const inpNombre2 = document.getElementById("inpNombre2").value;
    const inpEdad2 = Number(document.getElementById("inpEdad2").value);

    const resultado = document.getElementById("resultado");

    if(inpEdad1>inpEdad2){
        resultado.innerHTML = `El mayor es ${inpNombre1}`;
    } else {
        resultado.innerHTML = `El mayor es ${inpNombre2}`;
    }
}