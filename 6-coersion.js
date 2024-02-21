// Coersión es el cambio de tipo de datos de una variable
// Existen dos manera de realizarlo, implicita y explisita

// implicita, js interpreta y intenta cambiar el valor directamente
//ej:

4 + "7"   // resultado 47
4 * "7"   // resultado 28
2 + true  // resultado 3
false - 3 // resultado -3

//Para no dejar al hazar los valores que interprete JS, recomendamos utilizar Coerzión Explicita
//Para realizar una transformación de un tipo de datos, osea una Coersion, utilizamos fuciones expecificas.
//Number()
//String()
//Bulean()

Number("47") // 47
Boolean(0)   // false
Boolean(1)   // true
String(89)   // "89"

// Definimos la variable a como un numeró de valor 20.
var a = 20;
var b = String(a);

typeof b   // String