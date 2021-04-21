const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularVotos);

function calcularVotos() {
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let candidato4 = 0;
    let contadorVotos = 0;
    let continuar = true;

    while (continuar) {
        let voto = Number(prompt("Ingrese el identificador del candidato por el que deseé votar (1, 2, 3 o 4) o 0 para salir"));
        if (voto < 0 || voto > 4) {
            alert("Solo hay 4 candidatos o si desea salir presione 0");
        } else if (voto == 0) {
            continuar = false;
        } else if (voto == 1) {
            candidato1++;
            contadorVotos++;
        } else if (voto == 2) {
            candidato2++;
            contadorVotos++;
        } else if (voto == 3) {
            candidato3++;
            contadorVotos++;
        } else {
            candidato4++;
            contadorVotos++;
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `En total hubo ${contadorVotos} votos<br>
                                    El candidato 1 obtuvo ${candidato1} votos que corresponde al ${Math.trunc((candidato1 * 100) / contadorVotos)}%<br>
                                    El candidato 2 obtuvo ${candidato2} votos que corresponde al ${Math.trunc((candidato2 * 100) / contadorVotos)}%<br>
                                    El candidato 3 obtuvo ${candidato3} votos que corresponde al ${Math.trunc((candidato3 * 100) / contadorVotos)}%<br>
                                    El candidato 4 obtuvo ${candidato4} votos que corresponde al ${Math.trunc((candidato4 * 100) / contadorVotos)}%<br>`;
}