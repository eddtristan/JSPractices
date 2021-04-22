const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", realizarSuma);

function realizarSuma() {
    let pares = 0;
    let impares = 0;
    for (let i = 200; i <= 400; i++) {
        if ((i % 2) == 0) {
            pares = pares + i;
        } else {
            impares = impares + i;
        }
    }

    const resultContainer =document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>Se sumaron los pares e impares por separado entre el 200 y el 400 y el resultado fue el siguiente:<br>
                                    La suma de los pares fue: ${pares}<br>
                                    La suma de los impares fue: ${impares}</span>`;

}