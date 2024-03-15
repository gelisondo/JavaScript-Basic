//se crean variables para representar los elementos

// el querySelector lo podemos utilizar como CSS,
// h1 { color: blue}
// p {}
// .calse1 { ... }
// #test { ... }
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//console.log("Hello, world");

//innerHTML modifica el HTML directamente y lo interpreta: Esto es inseguro!!
//innerTEXT solo modifica el texto y no es interpretado como HTML.

function Cambiar(texto){
    document.querySelector('p').innerHTML=(texto);
}

Cambiar('<b>Contundente pasión</b>');

h1.innerHTML = '<h1 style="color: yellow; padding: 20px">Mirame</h1> ';
input.innerText = "pruebas";

//modificar clases
//Obtenemos los atributos
 h1.getAttribute('class');

//Modificamos los atributos
h1.setAttribute('id','666');

//Agrega la clase rojo
h1.classList.add('rojo');

//Si tiene la clase rojo la remueve.
h1.classList.remove('rojo');

//toggle agrega o quita la clase cada vez que la llamemos.
//h1.classList.toggle('verde');

//Contains devuelve true/false si existe o no la clase
//h1.classList.contains('rojo');


//Crear elementos, hasta hora somo modificamos el HTML existente.
const img = document.createElement('img');

img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');

pid.innerHTML = "";
pid.append(img);