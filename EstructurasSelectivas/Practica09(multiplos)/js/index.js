const btnRevisarNumeros = document.getElementById("btnRevisarNumeros");

btnRevisarNumeros.addEventListener("click", revisarNumeros);

function revisarNumeros() {
    const numero1 = Number(document.getElementById("inpNumero1").value);
    const numero2 = Number(document.getElementById("inpNumero2").value);

    let resultado = document.getElementById("resultado");

    if ((numero1 % numero2) == 0) {
        resultado.innerText = `El primer número es múltiplo del segundo`;
    } else if ((numero2 % numero1) == 0) {
        resultado.innerText = `El segundo número es múltiplo del segundo`;
    } else {
        resultado.innerText = `Ningún número es múltilo del otro`;
    }
}