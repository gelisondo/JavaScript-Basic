// Ejercicio: Juego de Juego papel o tijera
// 1 generar variables
// 2 Logica de la validación
// Encapsular la lógica en una funcion 

var obj1 = "piedra";
var obj2 = "papel";
var obj3 = "tijeras";

function juegoppt(userrandon,cpurandon){
    // Piedra - Gana - pepel
    // Papel - Gana - piedra
    // Tijeras - gana - papel
    if ( userrandon == 3 ) {
        var user = obj3;
    } if ( userrandon == 2 ) {var edad = 18; 
        var accion;  
        
        if(edad === 18) {
            accion = 'Puede votar, será su 1ra votación'
        } else if(edad > 18) { 
            accion = 'Puede votar'
        } else { // call back 
            accion = 'Aun no puede votar'
        }
        
        console.log(accion);
        var user = obj2;
    } if ( userrandon == 1 ) {
        var user = obj1;
    }

    if ( cpurandon == 3 ) {
        var cpu = obj3;
    } if ( cpurandon == 2 ) {
        var cpu = obj2;
    } if ( cpurandon == 1 ) {
        var cpu = obj1;
    }


    if ( user == obj1 && cpu == obj2 ){
        //piedra - papel
        console.log( "Gana el usuario:" + obj2 + " le gana al" + obj1 );

    } if ( user == obj2 && cpu == obj1 ){
        //papel - piedra
        console.log( "Gana el cpu:" + obj2 + " le gana al" + obj1 );

    } if ( user == obj1 && cpu == obj3 ){
        //piedra - tijeras
        console.log( "Gana el usuario:" + obj1 + " le gana al" + obj3 );

    } if ( user == obj3 && cpu == obj1 ){
        //tijera - piedra
        console.log( "Gana el cpu:" + obj1 + " le gana al" + obj3 );

    } if ( user == obj3 && cpu == obj2){
        //tijera - papel
        console.log( "Gana el usuario:" + obj3 + " le gana al" + obj2 );
    }

}
var cpurandon  = Math.floor(Math.random() * 3);
var userrandon = Math.floor(Math.random() * 3);
juegoppt(userrandon,cpurandon)
