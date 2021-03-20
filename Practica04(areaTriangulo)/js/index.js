let btnArea = document.getElementById("btnArea");

btnArea.addEventListener("click", calcularArea);

function calcularArea() {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let area = (base * altura)/2;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>El área del triángulo es de:</em> ${area}`;
}