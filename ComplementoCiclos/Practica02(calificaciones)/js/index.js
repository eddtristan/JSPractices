const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", obtenerPromedio);

function obtenerPromedio() {
    let calificacionHombre = 0; 
    let calificacionMujer = 0;
    let contadorHombres = 0;
    let contadorMujeres = 0;
    let calificaciones = 0;
    let promedioHombres = 0;
    let promedioMujeres = 0;
    let promedioMayor = "";

    for (let i = 0; i < 20; i++) {
        let calificacion = Number(prompt(`Ingrese la calificación del alumno numero ${i+1}`));
        calificaciones = calificaciones + calificacion;
        let sexo = prompt("Ingrese H si el alumno es hombre y M si la alumna es Mujer");
        if (sexo == "M" || sexo == "m") {
            calificacionMujer = calificacionMujer + calificacion;
            contadorMujeres++;
        } else if (sexo == "H" || sexo == "h") {
            calificacionHombre = calificacionHombre + calificacion;
            contadorHombres++;
        } else {
            alert("Ingresa un sexo valido");
        }
    }

    promedioHombres = calificacionHombre / contadorHombres;
    promedioMujeres = calificacionMujer / contadorMujeres;

    if (promedioHombres > promedioMujeres) {
        promedioMayor = "los hombres";
    } else {
        promedioMayor = "las mujeres";
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El promedio general del grupo es de: ${calificaciones / 20}<br><br>
                                    El promedio de las mujeres es de: ${promedioMujeres}<br><br>
                                    El promedio de los hombres es de: ${promedioHombres}<br><br>
                                    El promedio más alto es el de ${promedioMayor}`;

}