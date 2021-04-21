const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularPromedio);

function calcularPromedio() {
    let acumuladorEdades = 0;
    let contadorEdades = 0;

    let continuar = true;

    while (continuar) {
        let edad = prompt(`Ingrese la edad del alumno ${contadorEdades+1}`);
        if (edad == null){
            continuar = false;
        } else {
            acumuladorEdades = acumuladorEdades + Number(edad);
            contadorEdades++;
        }
    }
    let promedio = acumuladorEdades / contadorEdades;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>El promedio de edad de los ${contadorEdades} alumnos es ${promedio} </span>`
}