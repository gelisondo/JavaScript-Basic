// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien,
// mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

function pregunta(){
    var respuesta = prompt("Cuanto es el resultado de la operación 2 + 2");
    return respuesta;
}

verificar = pregunta();

while(verificar != 4){
    console.log("la respuesta es no es correcta");
    pregunta();
}

console.log("la respuesta es correcta felicitaciones");