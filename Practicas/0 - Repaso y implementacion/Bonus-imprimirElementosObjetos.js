//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno
//(no se vale imprimir el objeto completo).

let instrumentos = {
    bass: 'Precission Bass',
    guittarr: 'Stratocaster',
    drums: 'Gt Performers'
};


function imprimir(mentos){
    for(let key in mentos){
        console.log(mentos[key]);
    }
}

imprimir(instrumentos);
