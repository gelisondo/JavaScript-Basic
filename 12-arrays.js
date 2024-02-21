// Arrays es de tipo de datos objeto
// se define con corchetes y se separan los datos por medio de una coma ","

var frutas = ["Manzana","Plátano","Cerezá","Fresa"];

//cada pocición de los datos es un Indice comenzando desde el 0

//Llamamos al array
console.log(frutas);

//Podemos interactuar con el array utilizando métodos de JS, estos son similares a las funciones separadas por un punto
var longitud = frutas.length;

//length

//para saber realmente el ultimo se debe restar uno
var ultimo = frutas.length - 1;

//Para mostrar el valor de un indice indicamos el mismo
console.log(frutas[1]);


//Los array son mutables, esto significa que pueden cambiar 
//Para mutar los array existen los "métodos" son funciones extras para manipularlas
/// Metodos:

// push    
// unshift
// pop
// shift

//Agregamos dos frutas al array al final
frutas.push("uvas","naranjas");

//Eliminamos una fruta del final
frutas.pop();

// ---------------------------------

// Agragamos dos frutas al inicio
frutas.unshift("palta","tomate");

//Eliminamos una fruta del inicio
frutas.shift();



//Buscar una cadena/numero en un array con el método indexOf y obtener el indice
var posicion = frutas.indexOf("Cereza");
console.log(posicion); //salida 2

