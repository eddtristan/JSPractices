const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", completarSerie);

function completarSerie() {
    let numero = 5;
    let siguiente = 0;
    let sumatoria = 0;
    let serie = "";
    let continuar = true;

    while (continuar) {
        if (siguiente == 0){
            siguiente = siguiente + numero;
            sumatoria = sumatoria + siguiente;
            serie += `<span>${siguiente}</span>`;
        }
        siguiente = siguiente + 2;
        sumatoria = sumatoria + siguiente;
        serie += `<span>, ${siguiente}</span>`;
        if (sumatoria >= 1800) {
            continuar = false;
        }
        siguiente = siguiente + 3;
        sumatoria = sumatoria + siguiente;
        serie += `<span>, ${siguiente}</span>`;
        if (sumatoria >= 1800) {
            continuar = false;
        }
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${serie}`;
}