const btnOrganizar = document.getElementById("btnOrganizar");

btnOrganizar.addEventListener("click", organizarDescendentemente);

function organizarDescendentemente() {
    const numero1 = Number(document.getElementById("inpNumero1").value);
    const numero2 = Number(document.getElementById("inpNumero2").value);
    const numero3 = Number(document.getElementById("inpNumero3").value);

    let resultado = document.getElementById("resultado");

    if (numero1 > numero2 && numero1 > numero3){
        if (numero2 > numero3){
            resultado.innerText = `Quedan de la siguiente manera: ${numero1}, ${numero2}, ${numero3}`;
        } else {
            resultado.innerText = `Quedan de la siguiente manera: ${numero1}, ${numero3}, ${numero2}`;
        }
    } else if (numero2 > numero1 && numero2 > numero3) {
        if (numero1 > numero3) {
            resultado.innerText = `Quedan de la siguiente manera: ${numero2}, ${numero1}, ${numero3}`;
        } else {
            resultado.innerText = `Quedan de la siguiente manera: ${numero2}, ${numero3}, ${numero1}`;
        }
    } else {
        if (numero1 > numero2) {
            resultado.innerText = `Quedan de la siguiente manera: ${numero3}, ${numero1}, ${numero2}`;
        } else {
            resultado.innerText = `Quedan de la siguiente manera: ${numero3}, ${numero2}, ${numero1}`;
        }
    }
}