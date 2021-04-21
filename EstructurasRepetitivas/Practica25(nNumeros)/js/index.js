const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", leerNumeros);

function leerNumeros() {
    let continuar = true;
    let positivos = 0;
    let contadorPositivos = 0;
    let promedio = 0;
    let contadorPromedio = 0;

    while (continuar) {
        let numero = prompt("Ingrese un número");
        if (numero == null) {
            let pregunta = confirm("Desea ingresar otro número?");
            if (!pregunta) {
                continuar = false;
            }
        } else {
            numero = Number(numero);
            if (numero > 0) {
                positivos = positivos + numero;
                contadorPositivos++;
                promedio = promedio + numero;
                contadorPromedio++;
            } else {
                promedio = promedio + numero;
                contadorPromedio++;
            }
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>Se introdujeron ${contadorPositivos} números mayores que 0 <br><br>
                                    El promedio de los números positivos es: ${Math.trunc(positivos / contadorPositivos)}<br><br>
                                    El promedio de todos los números es: ${Math.trunc(promedio / contadorPromedio)}</span>`;

}