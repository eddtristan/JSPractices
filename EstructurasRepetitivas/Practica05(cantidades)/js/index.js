const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", evaluarNumero);

function evaluarNumero() {
    let continuar = true;
    let numeroMayor = 0;
    let numeroMenor = 0;

    while (continuar) {
        let numero = prompt(`Ingrese el número a evaluar`);

        if (isNaN(numero)) {
            alert(`Es necesario que solo ingrese numeros`);
        } else if (numero == null) {
            continuar = false;
        } else {
            numero = Number(numero);
            if (numero >= 500) {
                numeroMayor++;
            } else {
                numeroMenor++;
            }
        }
    }
    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>Ingreso ${numeroMayor} numeros mayores a 500 y ${numeroMenor} menores a 500</span>`;
}