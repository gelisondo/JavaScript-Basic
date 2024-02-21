// Truthy y Falsy 

// Son valores que son verdaderos o falsos 

// Falsy (False)

"" // un string vacío 
0 -0
null
NaN
false
undefined

//Truthy (true)

"hola"
30
{a:1}
[1,3]
true
function a(){}


// Para que podemos utilizar esto, para generar condiciones segun el valor que demos. 
if(InputEvent.value) {
    ...
}


//Funsión Bolean();
// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true

// Solo por existir un Arreglo o un Objeto es verdadero
Boolean([]) // true
Boolean({}) // true


//Falso
// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false
