const btnOpciones = document.getElementById("btnOpciones");

btnOpciones.addEventListener("click", buscarOpciones);

function buscarOpciones() {
    const presupuesto = Number(document.getElementById("inpPresupuesto").value);
    const precioKilometro = 5;

    let resultado = document.getElementById("resultado");

    if (presupuesto < (precioKilometro * 750 * 2)) {
        resultado.innerText = `Estas vacaciones no hay viaje :C`;
        return;
    }

    if (presupuesto >= (precioKilometro * 1800 * 2)) {
        resultado.innerText = `Las opciones de viaje que tienes son:
                                Cancún, Acapulco, P. V. y México`;
    } else if (presupuesto >= (precioKilometro * 1200 * 2) && presupuesto < (precioKilometro * 1800 * 2)) {
        resultado.innerText = `Las opciones de viaje que tienes son:
                                Acapulco, P. V. y México`;
    } else if (presupuesto >= (precioKilometro * 800 * 2) && presupuesto < (precioKilometro * 1200 * 2)) {
        resultado.innerText = `Las opciones de viaje que tienes son:
                                P. V. y México`;
    } else {
        resultado.innerText = `La opcione de viaje que tienes es:
                                México`;
    }
}