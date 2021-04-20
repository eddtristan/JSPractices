const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", registroVentas);

function registroVentas() {
    let registroCiudades = "";
    let registroTiendas = "";
    let registroEmpleados = "";
    let ciudad = 1;
    let tienda = 1;
    let empleado = 1;
    let otraCiudad = true;
    let otraTienda = true;
    let otroEmpleado = true;
    let totalTienda = 0;
    let totalCiudad = 0;
    let totalCadena = 0;

    while (otraCiudad) {
        while (otraTienda) {
            while (otroEmpleado) {
                let venta = prompt(`Ingresa las ventas del empleado ${empleado} de la tienda ${tienda} de la ciudad ${ciudad}`);
                if (venta == null) {
                    let pregunta = confirm(`Desea registrar otro empleado para la tienda ${tienda} de la ciudad ${ciudad}?`);
                    if (!pregunta) {
                        otroEmpleado = false;
                        registroTiendas += `<span>El total de ventas de la tienda ${tienda} de la ciudad ${ciudad} fue de $${totalTienda}</span><br>`;
                    }
                } else {
                    registroEmpleados += `<span>El empleado ${empleado} de la tienda ${tienda} de la ciudad ${ciudad} vendió $${Number(venta)}</span><br>`;
                    totalCadena = totalCadena + Number(venta);
                    totalTienda = totalTienda + Number(venta);
                    totalCiudad = totalCiudad + Number(venta);
                    empleado++;
                }
            }
            let pregunta = confirm(`Desea registrar otra tienda para la ciudad ${ciudad}?`);
            if (!pregunta) {
                otraTienda = false;
                registroCiudades += `<span>El total de ventas para la ciudad ${ciudad} fue de $${totalCiudad}</span><br>`;
            } else {
                totalTienda = 0;
                tienda++;
                empleado = 1;
                otroEmpleado = true;
            }
        }
        let pregunta = confirm(`Desea ingresar otra ciudad para registrar las ventas?`);
        if (!pregunta) {
            otraCiudad = false;
        } else {
            totalCiudad = 0;
            totalTienda = 0;
            ciudad++;
            tienda = 1;
            empleado = 1;
            otraTienda = true;
            otroEmpleado = true;
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `Los totales de las ventas del día se encuentran distribuidas de la siguiente manera:<br>
                                    Ventas por empleado: <br> ${registroEmpleados}<br>
                                    Ventas por tienda: <br> ${registroTiendas}<br>
                                    Ventas por ciudad: <br> ${registroCiudades}<br>
                                    El total de ventas de la cadena fue de $${totalCadena}`;
}