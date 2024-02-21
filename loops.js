//creamos un array

var estudiantes = ["Maria","sergio","rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for (i = 0; i < estudiantes.length; i++ ) {
    saludarEstudiantes(estudiantes[i]);
}


//Crear la primer variables como un index "estudiante" para recorrer un grupo "estudiantes"
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante[estudiante]);
}