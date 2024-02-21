//Recorriendo Arrays con .find(), .forEach() y .some()

// array con objetos como datos por indice
var articulos =  [
    { nombre: "Bici", costo: 3000},
    { nombre: "tv", costo: 2500},
    { nombre: "libro", costo: 320},
    { nombre: "celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];


//Metodo find()

//Genera un nuevo array, en caso que exista
//Retorna el primer elemento de un array que cumple con una condición definida en el nuevo array
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

var encuentraOtroArticulo = articulos.find(function(articulo2){
    return articulo2.nombre === "teclado"
});

//Metodo forech()
// No genera un nuevo array, genera un filtrado sin modificar

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//devuelve directamente los nombres de los articulos.


//Metodo some()
// solo nos devolvera verdadero o falso, si existe el articulo.
// crea un nuevo array.
var articulosBaratos = articulos.some(function(articulo3){
    return articulo3.costo <= 800;
});

if( articulosBaratos == true ){
    var articulosBaratosMostrar = articulos.filter(function(articulo){
        return articulo.costo <= 800;
    });

    articulosBaratosMostrar;
}