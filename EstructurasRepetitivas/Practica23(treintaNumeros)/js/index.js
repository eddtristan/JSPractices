const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", leerNumeros);

function leerNumeros() {
    let suma = 0;
    let promedio = 0;
    let contadorPromedio = 0;
    let numero = 0;

    for (let i = 0; i < 30; i++) {
        numero = Number(prompt(`Ingrese el número ${i+1} de 30`));
        if (numero == 0) {
            alert("Ingrese un número diferente de 0");
            i--;
        } else if ((numero % 2) == 0) {
            promedio = promedio + numero;
            contadorPromedio++;
        } else {
            suma = suma + numero;
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>La suma de los números impares es de ${suma} y el promedio de los pares es de ${promedio / contadorPromedio}</span>`;
}