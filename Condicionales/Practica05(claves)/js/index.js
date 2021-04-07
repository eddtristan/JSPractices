const btnDescuento = document.getElementById("btnDescuento");

btnDescuento.addEventListener("click", calcularDescuento);

function calcularDescuento() {
    const inpClave = Number(document.getElementById("inpClave").value);
    const inpNombre = document.getElementById("inpNombre").value;
    const inpPrecio = Number(document.getElementById("inpPrecio").value);

    const resultado = document.getElementById("resultado");

    if(inpClave == 01){
        resultado.innerHTML = `La clave de producto es: ${inpClave}<br>
                                El nombre del producto es: ${inpNombre}<br>
                                El precio sin descuento es: ${inpPrecio}<br>
                                El precio con descuento es: ${inpPrecio*0.9}`
    } else {
        resultado.innerHTML = `La clave de producto es: ${inpClave}<br>
                                El nombre del producto es: ${inpNombre}<br>
                                El precio sin descuento es: ${inpPrecio}<br>
                                El precio con descuento es: ${inpPrecio*0.8}`
    }
}