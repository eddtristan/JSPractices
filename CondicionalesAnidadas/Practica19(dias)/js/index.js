const btnIdentificar = document.getElementById("btnIdentificar");

btnIdentificar.addEventListener("click", identificarDia);

function identificarDia() {
    const numero = Number(document.getElementById("inpNumero").value);

    let resultado = document.getElementById("resultado");

    if (numero == 1) {
        resultado.innerText = `El día corrspondiente al número es el Lunes`;
    } else if (numero == 2) {
        resultado.innerText = `El día corrspondiente al número es el Martes`;
    } else if (numero == 3) {
        resultado.innerText = `El día corrspondiente al número es el Miercoles`;
    } else if (numero == 4) {
        resultado.innerText = `El día corrspondiente al número es el Jueves`;
    } else if (numero == 5) {
        resultado.innerText = `El día corrspondiente al número es el Viernes`;
    } else if (numero == 6) {
        resultado.innerText = `El día corrspondiente al número es el Sábado`;
    } else if (numero == 7) {
        resultado.innerText = `El día corrspondiente al número es el Domingo`;
    } else  {
        resultado.innerText = `Solo puedes ingresar un número entre 1-7`;
    }
}