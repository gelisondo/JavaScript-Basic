// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.
// El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

// Generar un undefine, por que la variable se declara y se inicializa despues.
// El motor de java script sube la vriables miNombre y le asigna el valor undefine 
console.log(miNombre);
var miNombre = "pruebas";


// Hoisting en funciones:
// Lo curioso es que si llamas a una funcion si ser declarada JS busca en el codigo y te la puede mostrar.
// Existe un detalle si esta utiliza una variable que no esta declarada en su SCOPE.


// En este caso la Muestra. Aun que no es la mejor practica
console.log( Prueba() );

function Prueba() {
    return "hola"
}


// pruebas con Variables
// En este caso el llamado a la función funsiona correctamente pero al momento de mostrar la variables es 
// Mostrada como undefine, per que está por fuera del SCOPE
console.log( Prueba2());

function Prueba2() {
    return varPrueba2;
}

var varPrueba2 = "una cadena";


// ########## Buenas Practicas ########## //
// 1 ) Las Variables se declaran y/o se inicializan antes de ser utilizadas 
// 2 ) Las funciones se Declaran antes de ser llamadas 

//Declaración de variables
var varCorrecta;
varCorrecta = "Correcta";

//Declaración de funsiones 
function correcta(){
    console.log( "Mostramos cadenas muy interesantes" + varCorrecta );
}

//Llamado de funsiones
correcta();


// Buenas prácticas

// El tema de Hoisting solo sucede con las declaraciones de variables y funciones, por lo que se** recomienda declarar las variables y las funciones lo más arriba posible del código**, para evitar errores.
// También, el tema de hoisting ya está solucionado con las nuevas formas de declarar variables con let y const.



