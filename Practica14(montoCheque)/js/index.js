const btnCheque = document.getElementById("btnCheque");

btnCheque.addEventListener("click", generarCheque);

function generarCheque() {
    const dias = Number(document.getElementById("dias").value);
    const alojamiento = Number(document.getElementById("alojamiento").value);
    const comida = Number(document.getElementById("comida").value);

    let totalAlojamiento = dias * alojamiento;
    let totalComida = dias * comida;
    let otrosGastos = 100 * dias;
    let total = totalAlojamiento + totalComida + otrosGastos;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<em>El viaje a Monterrey por ${dias} días generó los siguientes gastos: </em><br>
                        <em>El precio del alojamiento por día fue de $${alojamiento} por ${dias} dias genera un costo de $${totalAlojamiento}</em><br>
                        <em>El precio de la comida por día fue de $${comida} por ${dias} días genera un costo de $${totalComida}</em><br>
                        <em>Se le asignaron $100 por cada día para otros gastos lo cúal da un costo de $${otrosGastos}</em><br>
                        <em>El total del costo del viaje fue de $${total}</em><br>`;
}