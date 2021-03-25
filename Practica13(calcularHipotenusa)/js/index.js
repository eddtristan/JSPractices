const btnHipotenusa = document.getElementById("btnHipotenusa");

btnHipotenusa.addEventListener("click", calcularHipotenusa);

function calcularHipotenusa() {
    const catetoA = Number(document.getElementById("catetoA").value);
    const catetoB = Number(document.getElementById("catetoB").value);

    let hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>La hipotenusa es:</em> ${hipotenusa}`;
}