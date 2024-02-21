//Definimos el array
var arraySecreto = ["Manzana","Plátano","Cerezá","Fresa"];


//Creamos una función para verificar si el primir elemento es un string
function solution(arraySecreto) {
    // Tu código aquí 👈
    var verificar = arraySecreto[0];
    if ( typeof verificar == "string"){
        return true;
    } else {
        return false;
    }
  }
  
//llamamos a la funsión pasando como parámetro, el array
solution(arraySecreto);

// segunda solucion
function solution2(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
  }

//solution2
solution2(arraySecreto);