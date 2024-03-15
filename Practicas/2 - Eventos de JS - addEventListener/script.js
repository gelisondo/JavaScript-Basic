const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {

    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let sumaInputs = valor1 + valor2;

    pResult.innerHTML = "Rsultado: " + sumaInputs;


}


