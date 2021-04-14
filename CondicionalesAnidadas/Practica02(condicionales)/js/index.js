const btnCalcularDigitos = document.getElementById("btnCalcularDigitos");

btnCalcularDigitos.addEventListener("click", calcularDigitos);

function calcularDigitos() {
    const inpNumero = Number(document.getElementById("inpNumero").value);

    const resultado = document.getElementById("resultado");

    if (inpNumero > 99 && inpNumero < 1000) {
        resultado.innerHTML = `El número cuenta con tres digitos`;
    } else if (inpNumero > 9 && inpNumero < 100) {
        resultado.innerHTML = `El número cuenta con dos digitos`;
    } else if (inpNumero > 0 && inpNumero < 10) {
        resultado.innerHTML = `El número cuenta con un digito`;
    } else {
        resultado.innerHTML = `El número cuenta con más de tres digitos`;
    }
}

function calcularDigitosSimple() {
    const inpNumero = Number(document.getElementById("inpNumero").value);

    const resultado = document.getElementById("resultado");

    if (inpNumero < 1000) {
        resultado.innerHTML = `El número cuenta con tres digitos`;
        if (inpNumero < 100) {
            resultado.innerHTML = `El número cuenta con dos digitos`;
            if (inpNumero < 10) {
                resultado.innerHTML = `El número cuenta con un digito`;
            }
        }
    } else {
        resultado.innerHTML = `El número cuenta con más de tres digitos`;
    }
}