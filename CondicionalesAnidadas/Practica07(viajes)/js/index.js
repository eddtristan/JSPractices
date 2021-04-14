const btnCotizar = document.getElementById("btnCotizar");

btnCotizar.addEventListener("click", cotizarViaje);

function cotizarViaje() {
    let tipoAutobus = document.getElementById("sltTipoAutobus").value;
    const personas = Number(document.getElementById("inpPersonas").value);
    const kilometros = Number(document.getElementById("inpKilometros").value);
    let costo = 0;
    let costoPersona = 0;

    let resultado = document.getElementById("resultado");

    if (tipoAutobus == "tipoA") {
        if (personas <= 20) {
            costo = kilometros * 1.5 * 20;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        } else {
            costo = kilometros * 1.5 * personas;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        }
    } else if (tipoAutobus == "tipoB") {
        if (personas <= 20) {
            costo = kilometros * 2 * 20;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        } else {
            costo = kilometros * 2 * personas;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        }
    } else if (tipoAutobus == "tipoC") {
        if (personas <= 20) {
            costo = kilometros * 2.5 * 20;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        } else {
            costo = kilometros * 2.5 * personas;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        }
    } else if (tipoAutobus == "tipoD") {
        if (personas <= 20) {
            costo = kilometros * 3 * 20;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        } else {
            costo = kilometros * 3 * personas;
            costoPersona = costo / personas;
            resultado.innerText = `El costo por persona sería de $${costoPersona}
                                    y el costo total sería de $${costo}`;
        }
    }
}