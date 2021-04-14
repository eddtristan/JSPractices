const btnRevisarNumero = document.getElementById("btnRevisarNumero");

btnRevisarNumero.addEventListener("click", revisarNumero);

function revisarNumero() {
    const numero = document.getElementById("inpNumero").value;

    let resultado = document.getElementById("resultado");

    if (numero.charAt(0) == numero.charAt(2)){
        resultado.innerText = `El número se lee igual al derecho y al revés`;
    } else {
        resultado.innerText = `El número no se lee igual al derecho y al revés`;
    }
}