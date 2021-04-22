const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularFactorial);

function calcularFactorial() {
    let numero = Number(prompt("Ingresa un número para calcular su factorial"));
    let factorial = numero;

    if (numero == 0) {
        factorial = 1;
    } else {
        for (let i = numero; i > 1; i--) {
            factorial = factorial * (i-1);
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El factorial de ${numero} es: ${factorial}</span>`;
}