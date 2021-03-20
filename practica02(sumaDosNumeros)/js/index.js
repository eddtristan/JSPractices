//Entradas -> Son los datos que necesito que me otorgue el usuario
//Procesos -> Son las acciones qie se le van a realizar a las entradas
//Salidas -> Son los resultados obtenido por los procesos realizados

//Entradas
let btnSumar = document.getElementById("btnSuma"); //Obtenemos un elemento por medio del id y lo almacenamos en una variable
let btnResta = document.getElementById("btnResta"); //Obtenemos un elemento por medio del id y lo almacenamos en una variable
let btnMulti = document.getElementById("btnMulti"); //Obtenemos un elemento por medio del id y lo almacenamos en una variable
let btnDivision = document.getElementById("btnDivision"); //Obtenemos un elemento por medio del id y lo almacenamos en una variable

btnSumar.addEventListener("click", sumarDosNumeros); //Le asignamos un evento al boton
btnResta.addEventListener("click", restarDosNumeros); //Le asignamos un evento al boton
btnMulti.addEventListener("click", multiplicarDosNumeros); //Le asignamos un evento al boton
btnDivision.addEventListener("click", dividirDosNumeros); //Le asignamos un evento al boton

function sumarDosNumeros() {
    let suma1 = Number(document.getElementById("suma1").value); //Se castea el string obtenido con el .value del numero1 a valor númerico
    let suma2 = Number(document.getElementById("suma2").value); //Se castea el string obtenido con el .value del numero2 a valor númerico
    
    let resultadoSuma = suma1 + suma2;

    let containerResultadoSuma = document.getElementById("containerResponseSuma");

    containerResultadoSuma.innerText = resultadoSuma;
}

function restarDosNumeros() {
    let resta1 = Number(document.getElementById("resta1").value); //Se castea el string obtenido con el .value del numero1 a valor númerico
    let resta2 = Number(document.getElementById("resta2").value); //Se castea el string obtenido con el .value del numero2 a valor númerico
    
    let resultadoResta = resta1 - resta2;

    let containerResultadoResta = document.getElementById("containerResponseResta");

    containerResultadoResta.innerText = resultadoResta;
}

function multiplicarDosNumeros() {
    let multi1 = Number(document.getElementById("multi1").value); //Se castea el string obtenido con el .value del numero1 a valor númerico
    let multi2 = Number(document.getElementById("multi2").value); //Se castea el string obtenido con el .value del numero2 a valor númerico
    
    let resultadoMulti = multi1 * multi2;

    let containerResultadoMulti = document.getElementById("containerResponseMulti");

    containerResultadoMulti.innerText = resultadoMulti;
}

function dividirDosNumeros() {
    let division1 = Number(document.getElementById("division1").value); //Se castea el string obtenido con el .value del numero1 a valor númerico
    let division2 = Number(document.getElementById("division2").value); //Se castea el string obtenido con el .value del numero2 a valor númerico
    
    let resultadoDivision = division1 / division2;

    let containerResultadoDivision = document.getElementById("containerResponseDivision");

    containerResultadoDivision.innerText = resultadoDivision;
}