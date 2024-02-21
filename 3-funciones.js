//Declarativas
function miFuncionD() {
    return 3;
}

miFuncionD();


//Expresión
var miFuncionE = function (a,b) {
    return a + b;
}

miFuncionE( 3, 4);


//Ejemplos 
function saludares(estudiante) {
    console.log(estudiante);
  }

  //llamamos a la funcion y mandamos un texto como parametro
saludares("nombrex");
  

function saludares2(estudiante2) {
    console.log(`Hola ${edutiante2}`)
}
  
saludares2("pedro");



/// Funcion de suma
function sumar(x,z) {
    var resultado = x + z;
    return resultado;
}

var resultado1 = sumar(3,6);
var resultado2 = sumar(300,1300);
var resultado3 = sumar(2400,2600);