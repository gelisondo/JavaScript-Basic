    var numero = 1;
    switch (numero) {
        case 1:
            console.log("soy un 1!");
            break;
        case 10:
            console.log("soy un 10!");
            break;
        case 100:
            console.log("Soy un 100!");
            break;
        default:
            console.log("no tiene un valor a comparar!");
    }


//Ejemplo sin el defoult y con varios casos en case an tes del break.

function juegoppt(userselect){
    var cpuselect = cpuChoise();
    var userselecttext = opciones[userselect];

    switch (userselecttext + cpuselect) {
        case "piedratijeras":
        case "papelpiedra":
        case "tijeraspapel":
            scoreuser++;
            writeScore();
            userWin();
            break;
        case "tijeraspiedra":
        case "piedrapapel":
        case "papeltijeras":
            scorecpu++;
            writeScore();
            cpuWin();
            break;
        case "tijerastijeras":
        case "papelpapel":
        case "piedrapiedra":
            empate();
            break;
    }
  
}


// Otro ejemplo:
export function solution(article) {
    // Tu código aquí 👈
    switch (article) {
      case "computadora":
        return "Con mi computadora puedo programar usando JavaScript";
        break;
      case "celular":
        return "En mi celular puedo aprender usando la app de Platzi";
        break;
      case "cable":
        return "¡Hay un cable en mi bota!";
        break;
      default:
        return "Artículo no encontrado";
  
    }
  }
  