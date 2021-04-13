const btnCalcularPromedio = document.getElementById("btnCalcularPromedio");

btnCalcularPromedio.addEventListener("click", calcularPromedio);

function calcularPromedio() {
    const calificacion1 = Number(document.getElementById("inpCalificacion1").value);
    const calificacion2 = Number(document.getElementById("inpCalificacion2").value);
    const calificacion3 = Number(document.getElementById("inpCalificacion3").value);
    const calificacion4 = Number(document.getElementById("inpCalificacion4").value);
    
    let promedio = 0;

    let resultado = document.getElementById("resultado");

    if (calificacion1 <= calificacion2 && calificacion1 <= calificacion3 && calificacion1 <= calificacion4) {
        promedio = (calificacion2 + calificacion3 + calificacion4) / 3;
        resultado.innerText = `La calificación eliminada fue: ${calificacion1}
                                El promedio final es: ${promedio}`;
    } else if (calificacion2 <= calificacion1 && calificacion2 <= calificacion3 && calificacion2 <= calificacion4) {
        promedio = (calificacion1 + calificacion3 + calificacion4) / 3;
        resultado.innerText = `La calificación eliminada fue: ${calificacion2}
                                El promedio final es: ${promedio}`;
    } else if (calificacion3 <= calificacion1 && calificacion3 <= calificacion2 && calificacion3 <= calificacion4) {
        promedio = (calificacion1 + calificacion2 + calificacion4) / 3;
        resultado.innerText = `La calificación eliminada fue: ${calificacion3}
                                El promedio final es: ${promedio}`;
    } else {
        promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
        resultado.innerText = `La calificación eliminada fue: ${calificacion4}
                                El promedio final es: ${promedio}`;
    }
}