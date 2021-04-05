const btnEvaluar = document.getElementById("btnEvaluar");

btnEvaluar.addEventListener("click", evaluarCalificacion);

function evaluarCalificacion() {
    const inpCalificacion = Number(document.getElementById("inpCalificacion").value);

    const resultado = document.getElementById("resultado");

    if(inpCalificacion>6){
        resultado.innerHTML = `El alumno esta aprobado`;
    } else {
        resultado.innerHTML = `El alumno esta reprobado`;
    }
}