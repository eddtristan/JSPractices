const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", conjeturaULAM);

function conjeturaULAM() {
    let numero = Number(prompt("Ingresa un número para iniciar la conjetura ULAM"));
    let conjetura = "";

    if (numero <= 0) {
        alert("Debes ingresar un número mayor que 0");
    }

    conjetura += `<li class="list-group-item">${numero} </li>`;

    while (numero != 1) {
        if ((numero % 2) == 0) {
            numero = numero / 2;
            conjetura += `<li class="list-group-item">${numero} </li>`;
        } else {
            numero = numero * 3 + 1;
            conjetura += `<li class="list-group-item">${numero} </li>`;
        }
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${conjetura}`;

}