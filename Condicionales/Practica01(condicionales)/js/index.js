const btnComparar = document.getElementById("btnComparar");

btnComparar.addEventListener("click", compararNumeros);

function compararNumeros() {
    const inpNumero1 = Number(document.getElementById("inpNumero1").value);
    const inpNumero2 = Number(document.getElementById("inpNumero2").value);
    const resultado = document.getElementById("resultado");

    if(inpNumero1>inpNumero2){
        resultado.innerHTML = `El número mayor es ${inpNumero1}`;
    } else if(inpNumero1<inpNumero2){
        resultado.innerHTML = `El número mayor es ${inpNumero2}`;
    } else {
        resultado.innerHTML = `Los números son iguales`;
    }
}