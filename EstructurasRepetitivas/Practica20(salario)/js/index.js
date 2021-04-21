const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSalario);

function calcularSalario() {
    let salario = 1500;
    let aumento = 1.10;
    let aumentos = `<span>El salario inicial es de $1500</span><br>`;
    
    for (let i = 0; i < 6; i++) {
        salario = salario * aumento;
        aumentos += `<span>El incremento del salario en el año ${i+1} lo deja en $${Math.trunc(salario)}</span><br>`;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `${aumentos}`;
}