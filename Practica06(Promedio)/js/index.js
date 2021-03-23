const btnPromedio = document.getElementById("btnPromedio");

btnPromedio.addEventListener("click", calcularPromedio);

function calcularPromedio() {
    const calificacionUno = Number(document.getElementById("calificacionUno").value);
    const calificacionDos = Number(document.getElementById("calificacionDos").value);
    const calificacionTres = Number(document.getElementById("calificacionTres").value);
    const calificacionCuatro = Number(document.getElementById("calificacionCuatro").value);
    const calificacionCinco = Number(document.getElementById("calificacionCinco").value);

    let promedio = (calificacionUno + calificacionDos + calificacionTres + calificacionCuatro + calificacionCinco) / 5;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>El promedio final es de:</em> ${promedio}`;
}