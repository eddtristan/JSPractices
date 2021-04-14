const btnRevisarNumero = document.getElementById("btnRevisarNumero");

btnRevisarNumero.addEventListener("click", revisarNumero);

function revisarNumero() {
    const numero = document.getElementById("inpNumero").value;

    let resultado = document.getElementById("resultado");

    if (numero < 100) {
        resultado.innerText = `El número no es capicúa`;
    } else if (numero < 1000) {
        if (numero.charAt(0) == numero.charAt(1) && numero.charAt(2) == 0){
            resultado.innerText = `El número es capicúa`;
        } else {
            resultado.innerText = `El número no es capicúa`;
        }
    } else if (numero < 10000){
        if (numero.charAt(0) == numero.charAt(3) && numero.charAt(1) == numero.charAt(2)){
            resultado.innerText = `El número es capicúa`;
        } else {
            resultado.innerText = `El número no es capicúa`;
        }
    } 
}