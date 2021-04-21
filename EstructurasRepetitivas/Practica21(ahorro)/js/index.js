const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularAhorro);

function calcularAhorro() {
    let ahorro = 0.03;
    let incremento = 3;

    for (let i = 0; i < 364; i++) {
        ahorro = ahorro * incremento;
        console.log(ahorro);
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerText = `El ahorro total del año fue de $${ahorro}`;

}