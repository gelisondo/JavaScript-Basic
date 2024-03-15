const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar todos los cursos de platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}


conseguirTipoSuscripcion("free");