const btnCalcularRadio = document.getElementById("btnCalcularRadio");

btnCalcularRadio.addEventListener("click", CalculaRadio);

function CalculaRadio (){
    const radio = Number(document.getElementById("inpRadio").value);
    const valorPi = 3.1415;

    let area = valorPi * (radio * radio);

    const resultado = document.getElementById("resultado");
    //Template literals
    resultado.innerHTML = `<em>El área del circulo es de:</em> ${area}`;
}