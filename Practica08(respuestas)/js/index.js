const btnPuntaje = document.getElementById("btnPuntaje");

btnPuntaje.addEventListener("click", calcularPuntaje);

function calcularPuntaje() {
    const correctas = Number(document.getElementById("correctas").value);
    const incorrectas = Number(document.getElementById("incorrectas").value);
    const enBlanco = Number(document.getElementById("enBlanco").value);

    let puntaje = (correctas * 4) + (incorrectas * (-1)) + (enBlanco * 0);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>El puntaje obtenido es de:</em> ${puntaje}`;
}