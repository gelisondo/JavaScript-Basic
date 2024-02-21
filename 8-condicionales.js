// Si pasa algo o se hace algo
//if () { }

var edad;
edad = 14;

if ( edad >= 18 ){
    console.log("Puede conducir");
}

if ( edad >= 18 ){
    console.log("Puede conducir");
} else {
    console.log( " No puede conducir");
}


//Anidar condicionales 

    var edad2 = 18;
    var carnetConducir = true;
    var vigencia = false;


if ( edad2 >= 18) {
    paso1 = true;
} else if ( carnetConducir == true ) {
    paso2 = true;
} else if ( vigencia == true ) {
    paso3 = true;
} else {
    console.log(" El conductor no está habilitado")
}


//Votación
var edad3 = 22;

if(edad3 === 18){
    console.log(" Puedes votar, será tu 1ra votación");
} else if ( edad3 > 18 && edad3 <= 22){
    console.log(" Puedas votar nuevamente");
} else {
    console.log(" no puedes votar aun");
}


// Operador ternario

//El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea
//de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

var numero = 2;

var resultado = numero === 1 ? "Si soy un uno" : "No no soy un 1";

// Si pasa algo o se hace algo
//if () { }

var edad;
edad = 14;

if ( edad >= 18 ){
    console.log("Puede conducir");
}

if ( edad >= 18 ){
    console.log("Puede conducir");
} else {
    console.log( " No puede conducir");
}


// Esto nos ayudará para poder hacer decisiones.

var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

// El operador ternario consiste en evaluar si una operación es Verdadera o Falsa. Brindando un resultado
//similar a un condicional pero con una linea de código.

condition ? true : false; 

// La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

var numero = 1; 
//              Condición       Verdadero    o    Falso
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';
console.log(resultado);

//Utilizamos una función para verificar si un número es par
var numeroP;
function esPar(numeroP) {
    return numeroP % 2 === 0 ? "Es par" : "No es par";
}

esPar(4);
esPar(3);