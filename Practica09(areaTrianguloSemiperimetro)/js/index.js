const btnArea = document.getElementById("btnArea");

btnArea.addEventListener("click", calcularArea);

function calcularArea() {
    const ladoA = Number(document.getElementById("ladoA").value);
    const ladoB = Number(document.getElementById("ladoB").value);
    const ladoC = Number(document.getElementById("ladoC").value);

    let semiperimetro = (ladoA + ladoB + ladoC) / 2;

    let area = Math.sqrt(semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC));

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>El área del triángulo es:</em> ${area}`;
}