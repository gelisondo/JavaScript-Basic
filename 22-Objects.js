//Creamos un objeto
var miAuto = {
    marca: "toyota",
    modelo: "Corolla",
    annio: 2020,//Creamos un método, una funsión dentro de un objeto
    detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.annio}`);
  }
};

//llamamos al metodo "detalleDelAuto" del objeto miAuto
miAuto.detalleDelAuto();

miAuto.marca
miAuto.annio
miAuto.modelo