var suscripcionUsuario = "Basic";

var tipoDeSuscripcion = [
    {   name: "Free", menssage: "Solo puedes tomar los cursos gratis" },
    {   name: "Basic", menssage: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {   name: "Expert", message: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {   name: "ExpertPlus", message: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
]

//con el metodo find generamos un nuevo obejto "mensajeFiltrado", se crea un obejo "restricciones", donde se pueden filtrar el nombre
var mensajeFiltrado = tipoDeSuscripcion.find(restricciones => restricciones.name === suscripcionUsuario);


//Si el mensaje existe, brindara un true, si no un undefine
if(mensajeFiltrado){
    console.log(`El tipo de suscripción ${suscripcionUsuario}: ${mensajeFiltrado.message}`);
}else {
    console.log(`No se encontro el tipo de suscripción ${suscripcionUsuario}.`);
} 