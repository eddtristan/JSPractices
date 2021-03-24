const btnConvertir = document.getElementById("btnConvertir");

btnConvertir.addEventListener("click", convertirMetros);

function convertirMetros() {
    const metros = Number(document.getElementById("metros").value);

    let pulgadas = Math.round(metros * 39.3701);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>Las pulgadas que debes solicitar son:</em> ${pulgadas}`;
}