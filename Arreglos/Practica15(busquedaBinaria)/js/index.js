const btnBuscar = document.getElementById("btnBuscar");
const inpNumero = document.getElementById("inpNumero");

let numberList = [];

function llenarArray() {
    let longitud = Math.floor(Math.random() * ((100 + 1) - 10) + 10);
    for (let i = 0; i < 50000; i++) {
        let randomNumber = Math.floor(Math.random() * ((100 + 1) - 1) + 1);
        numberList.push(randomNumber);
    }
    numberList.sort((a,b)=>a-b);
    console.log("🚀 ~ file: index.js ~ line 13 ~ llenarArray ~ numberList", numberList);
}

llenarArray();

btnBuscar.addEventListener("click", buscarElemento);

function buscarElemento() {
    let firstElement = 0;
    let lastElement = numberList.length - 1;
    let find = false;
    const numeroBusqueda = Number(inpNumero.value);

    while (firstElement <= lastElement && find == false) {
        let middle = Math.floor((firstElement + lastElement) / 2);
        if (numberList[middle] == numeroBusqueda) {
            find = true;
            break;
        } else {
            if (numberList[middle] > numeroBusqueda) {
                lastElement = middle - 1;
            } else {
                firstElement = middle + 1;
            }
        }
    }

    console.log("🚀 ~ file: index.js ~ line 43 ~ buscarElemento ~ find", find);
    
}
    
