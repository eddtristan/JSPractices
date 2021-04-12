const btnComparar = document.getElementById("btnComparar");

btnComparar.addEventListener("click", compararNumeros);

function compararNumeros() {
    const inpNumero1 = Number(document.getElementById("inpNumero1").value);
    const inpNumero2 = Number(document.getElementById("inpNumero2").value);
    const inpNumero3 = Number(document.getElementById("inpNumero3").value);

    const resultado = document.getElementById("resultado");

    if (inpNumero1 > inpNumero2){
        if (inpNumero1 > inpNumero3){
            resultado.innerHTML = `El número mayor es el primero`;
        }
    }
    if (inpNumero2 > inpNumero1){
        if (inpNumero2 > inpNumero3){
            resultado.innerHTML = `El número mayor es el segundo`;
        }
    }
    if (inpNumero3 > inpNumero1){
        if (inpNumero3 > inpNumero2){
            resultado.innerHTML = `El número mayor es el tercero`;
        }
    }
}