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

//metodos para reccorrer un arrey
// filter genera un nuevo array con contenidos de objetos por indice
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//sALIDA 0
// : 
// {nombre: 'libro', costo: 320}
// 1
// : 
// {nombre: 'teclado', costo: 500}
// length
// : 
// 2

articulosFiltrados;


//Metodos para recorrer un array, con objetos
//El método "map", genera un array con los datos solicitados 
var nombreArticulos = articulos.map(function(articuli){
    return articuli.nombre
});

//SALIDA: (7) ['Bici', 'tv', 'libro', 'celular', 'Laptop', 'teclado', 'Audifonos']
nombreArticulos;



