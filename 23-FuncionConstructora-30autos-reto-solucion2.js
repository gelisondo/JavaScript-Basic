function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}

//crea arrays autos
var autos = [];

//recorre el número de objetos que se crearan
for(let i=0; i < 3; i++)
{
    //utiliza la funsion prompt, para interactuar con el usuario
    var marca = prompt("Marca del auto");
    var modelo = prompt("Ingresa el modelo");
    var annio = prompt("Ingresa el año");

    //Agrega adentro de un array un objeto, que podra ser llamado desdel in index
    autos.push(new auto (marca, modelo, annio));
}

for(let a = 0; a < autos.length ; a++){
    console.log(autos[a]);
}