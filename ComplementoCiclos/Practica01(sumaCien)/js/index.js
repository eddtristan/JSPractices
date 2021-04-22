const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", sumarNumeros);

function sumarNumeros() {
    let sumatoria = 0;
    let continuar = true;

    while (continuar) {
        let numero = prompt("ingresa un número para agregar a la sumatoria");
        if (numero == null){
            let pregunta = confirm(`Aún no llega a 100 la sumatoria, lleva ${sumatoria}, desea continuar agregando números?`);
            if (!pregunta) {
                break;
            }
        } else {
            sumatoria = sumatoria + Number(numero);
            if (sumatoria > 100) {
                break;
            }
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>La sumatoria ha superado el número cien, tiene ${sumatoria}</span>`;

}