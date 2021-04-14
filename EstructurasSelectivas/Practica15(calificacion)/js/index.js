const btnTransformar = document.getElementById("btnTransformar");

btnTransformar.addEventListener("click", transformarNumero);

function transformarNumero() {
    const calificacion = Number(document.getElementById("inpCalificacion").value);

    let resultado = document.getElementById("resultado");

    if (calificacion >= 0 && calificacion <= 5) {
        resultado.innerText = `Su calificación es F`;
    } else if (calificacion == 6) {
        resultado.innerText = `Su calificación es E`;
    } else if (calificacion == 7) {
        resultado.innerText = `Su calificación es D`;
    } else if (calificacion == 8) {
        resultado.innerText = `Su calificación es C`;
    } else if (calificacion == 9) {
        resultado.innerText = `Su calificación es B`;
    } else if (calificacion == 10) {
        resultado.innerText = `Su calificación es A`;
    } else {
        resultado.innerText = `La calificación debe estar entre 0 - 10`;
    }
}