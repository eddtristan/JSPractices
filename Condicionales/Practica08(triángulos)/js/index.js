const btnReconocerTriangulo = document.getElementById("btnReconocerTriangulo");

btnReconocerTriangulo.addEventListener("click", reconocerTriangulo);

function reconocerTriangulo() {
    const inpLadoA = Number(document.getElementById("inpLadoA").value);
    const inpLadoB = Number(document.getElementById("inpLadoB").value);
    const inpLadoC = Number(document.getElementById("inpLadoC").value);

    const resultado = document.getElementById("resultado");

    if(inpLadoA >= inpLadoB && inpLadoA >= inpLadoC) {
        if (inpLadoA > (inpLadoB + inpLadoC)){
            if (inpLadoA == inpLadoB == inpLadoC){
                resultado.innerHTML = `Es un triángulo equilátero`;
            } else if (inpLadoA != inpLadoB != inpLadoC) {
                resultado.innerHTML = `Es un triángulo isósceles`;
            } else if (inpLadoA == inpLadoB || inpLadoB == inpLadoC || inpLadoC == inpLadoA){
                resultado.innerHTML = `Es un triángulo escaleno`;
            }
        } else {
            resultado.innerHTML = `Las longitudes no corresponden a un triángulo`;
        }
    } else if (inpLadoB >= inpLadoA && inpLadoB >= inpLadoC){
        if (inpLadoB > (inpLadoA + inpLadoC)){
            if (inpLadoA == inpLadoB == inpLadoC){
                resultado.innerHTML = `Es un triángulo equilátero`;
            } else if (inpLadoA != inpLadoB != inpLadoC) {
                resultado.innerHTML = `Es un triángulo isósceles`;
            } else if (inpLadoA == inpLadoB || inpLadoB == inpLadoC || inpLadoC == inpLadoA){
                resultado.innerHTML = `Es un triángulo escaleno`;
            }
        } else {
            resultado.innerHTML = `Las longitudes no corresponden a un triángulo`;
        }
    } else if (inpLadoC >= inpLadoA && inpLadoC >= inpLadoB){
        if (inpLadoC > (inpLadoA + inpLadoB)){
            if (inpLadoA == inpLadoB == inpLadoC){
                resultado.innerHTML = `Es un triángulo equilátero`;
            } else if (inpLadoA != inpLadoB != inpLadoC) {
                resultado.innerHTML = `Es un triángulo isósceles`;
            } else if (inpLadoA == inpLadoB || inpLadoB == inpLadoC || inpLadoC == inpLadoA){
                resultado.innerHTML = `Es un triángulo escaleno`;
            }
        } else {
            resultado.innerHTML = `Las longitudes no corresponden a un triángulo`;
        }
    } else {
        resultado.innerHTML = `Las longitudes no corresponden a un triángulo`;
    }
}