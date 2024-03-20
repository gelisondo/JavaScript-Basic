const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//Trabajo con form 
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btnForm = document.querySelector('#btnCalcularForm');
const pResultForm = document.querySelector('#resultForm');



//con addEventListener escuchamos los eventos del objeto seleccionado
//el primer argumento es elevento a escuchar 'click', y el segundo es la función a llamar sin el ()
btn.addEventListener('click', btnOnClick);

function btnOnClick() {

    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let sumaInputs = valor1 + valor2;

    pResult.innerHTML = "Rsultado: " + sumaInputs;


}

//Trabajamos con Formularios
form.addEventListener('submit', sumarInputValues);

//ingresamos event como parametro para que nos traiga los eventos generados por submit.
function sumarInputValues(event) {

    //Como esta función se llama al ejecutar "submit" del formulario la pagina se recarga
    //para evitar esto cambiaremos ese comportamiento con lo siguinte.
    event.preventDefault();

    console.log({event});

    let valor3 = Number(input3.value);
    let valor4 = Number(input4.value);
    let sumaInputsForm = valor3 + valor4;

    pResultForm.innerHTML = "Rsultado: " + sumaInputsForm;


}
