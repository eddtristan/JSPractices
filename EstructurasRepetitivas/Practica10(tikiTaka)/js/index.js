const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularVentas);

function calcularVentas() {
    let masDeMil = 0;
    let contadorMasDeMil = 0;
    let deQuinientosAMil = 0;
    let contadorDeQuinientosAMil = 0;
    let menosDeQuinientos = 0;
    let contadorMenosDeQuinientos = 0;
    let continuar = true;
    let ventasTotales = 0;

    while (continuar) {
        let venta = prompt("Ingresa el valor de la venta");

        if (venta == null) {
            continuar = false;
        } else {
            venta = Number(venta);
            if (venta <= 500) {
                menosDeQuinientos = menosDeQuinientos + venta;
                contadorMenosDeQuinientos++;
            } else if (venta > 500 && venta <= 1000) {
                deQuinientosAMil = deQuinientosAMil + venta;
                contadorDeQuinientosAMil++;
            } else {
                masDeMil = masDeMil + venta;
                contadorMasDeMil++;
            }
        }
    }
    ventasTotales = menosDeQuinientos + deQuinientosAMil + masDeMil;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>Las ventas que superaron los $1000 fueron ${contadorMasDeMil}<br>
                                    Las ventas que estuvieron entre $500 y $1000 fueron ${contadorDeQuinientosAMil}<br>
                                    Las ventas que estuvieron por debajo de los $500 fueron ${contadorMenosDeQuinientos}<br>
                                    El total de las ventas superiores a $1000 fue de $${masDeMil}<br>
                                    El total de las ventas entre %500 y $1000 fue de $${deQuinientosAMil}<br>
                                    El total de las ventas inferiores a $500 fue de $${menosDeQuinientos}<br>
                                    El total de todas las ventas fue de $${ventasTotales}</span>`;

}