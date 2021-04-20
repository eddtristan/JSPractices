const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", numerosPerfectos);

function numerosPerfectos() {
    let numero = Number(prompt(`Ingrese un número entero posiivo`));
    let auxiliar = numero;
    let sumatoria = 0;
    let perfectos = "";

    for (let i = auxiliar; i > 0; i--) {
        for (let j = numero - 1; j > 0; j--) {
            if ((i % j) == 0) {
                sumatoria = sumatoria + j;
            }
        }
        if (numero == sumatoria) {
            perfectos += `<span>${numero} </span><br>`;
        }
        numero--;
        sumatoria = 0;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `Los números perfectos menores a ${auxiliar} son: <br> ${perfectos}`;

}