let paragraph = document.getElementById("mainParagraph");
let btnNumeric = document.getElementById("numeric");
let btnText = document.getElementById("text");
let btnBooleano = document.getElementById("bool");

btnNumeric.addEventListener("click", writeNumericValue);
btnText.addEventListener("click", writeTextValue);
btnBooleano.addEventListener("click",writeBoolValue);

function writeNumericValue() {
    let numericValue = 2000 + 21;
    paragraph.textContent = numericValue;
}

function writeTextValue() {
    let textValue = "Codellege";
    paragraph.textContent = textValue;
}

function writeBoolValue() {
    let booleanValue = true; //1 = true - 0 = false
    paragraph.textContent = booleanValue;
}