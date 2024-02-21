// Inicializar variables
let autos = [];
let cantidadAutos = 0;
let cantidadRegistrados = 0;

//Función constructora
function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Preguntamos al usuario cuantos autos se registraran
cantidadAutos = prompt("Ingrese la cantidad de autos a registrar");

while ( cantidadRegistrados < cantidadAutos )
{
    //defino variables enel scope local para obtener los datos
    let marca = prompt(`Ingresar marca del auto ${cantidadRegistrados} :`);
    let modelo = prompt(`Ingresar modelo del auto ${cantidadRegistrados} :`);
    let annio = prompt(`Ingresar el año del auto ${cantidadRegistrados} :`);

    //LLamamos a la función constructora
    var autoNuevo = new Auto(marca, modelo, annio);

    //agrega el objeto creado al inicio del array
    autos.unshift(autoNuevo);

    //aumentamos la cantidad registrados
    cantidadRegistrados++;
}

//mostramos el arrego
console.log(autos)