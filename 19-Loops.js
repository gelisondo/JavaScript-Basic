//
var nombres = ["pedro","mariano","Ramiro","Silva"];

//Recorremos el array mostrando su contenido
for (var i = 0 ; i < nombres.length ; i++){
    console.log(nombres[i])
  }


//Función para mostrar el saludo
  function saludarPersonas(persona){
    console.log(`Hola, ${persona}`);
}

//recorre el array y llama a la función para saludar
  for (var persona of nombres){
    saludarPersonas(persona);
}

//-------------------------------------------------//
// Ejemplos que no modifica el array y otro que sí //
//-------------------------------------------------//

var numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (var number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original, por que puede actualizar el valor del indice
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]


//While es repetir mientras

while( nombres.length < 0 ){
    var persona = nombres.shift();
    saludarPersonas(persona);
}