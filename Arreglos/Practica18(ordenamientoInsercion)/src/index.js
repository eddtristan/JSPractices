let index = 0;

function main() {
    let numberList = [14, 4, 10, 9, 1, 2];

    let listSort = quickSort(numberList);
    console.log("🚀 ~ file: index.js ~ line 7 ~ main ~ listSort", listSort);
}

function quickSort(array) {
    if (array.length == 0) return [];
    //Privote -> Elemento que se encuentra a la mitad del arreglo
    let mediumIndex = Math.floor(array.length / 2);
    let pivote = array[mediumIndex];
    //Array left, right -> left números menores, right números mayores a pivote
    let leftArray = [];
    let rightArray = [];
    //Recorrer el arreglo para validar números mayores y menores
    for (let i = 0; i < array.length; i++) {
        if (i != mediumIndex) {
            if (array[i] < pivote) {
                leftArray.push(array[i]);
            } else {
                rightArray.push(array[i]);
            }
        }
    }
    leftArray = quickSort(leftArray);
    rightArray = quickSort(rightArray);
    console.log("🚀 ~ file: index.js ~ line 18 ~ quickSort ~ leftArray", leftArray);
    console.log("🚀 ~ file: index.js ~ line 20 ~ quickSort ~ rightArray", rightArray);

    return leftArray.concat(pivote).concat(rightArray);
}

main();