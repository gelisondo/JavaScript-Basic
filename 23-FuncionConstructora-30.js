// Función Constructora, realizamos un template para crear nuevos objetos con las misma distribución de datos

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}

// creamos un objeto llamando la funsión constructora. Importante el "new"
var autoNuevo = new auto("Tesla", "model 3", 2020);


// Los datos se almacenan en el nuevo objeto creado
console.log(autoNuevo.marca);