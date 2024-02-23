// Declara una constante 'autenticado' y la inicializa como verdadera.
const autenticado = true;

// Primer ejemplo: Comparación innecesaria.
if (autenticado === true) { // Aquí se compara si 'autenticado' es igual a 'true', lo cual es redundante.
    // Imprime un mensaje si el usuario está autenticado.
    console.log('El Usuario esta autenticado'); // El Usuario esta autenticado
}

// Declara una constante 'puntaje' con valor 639.
const puntaje = 639;

// Segundo ejemplo: Orden incorrecto en las validaciones.
if (puntaje > 333) {
    console.log('Buen puntaje... felicidades'); // Buen puntaje... felicidades
} else if (puntaje > 936) {
    console.log('Excelente esfuerzo'); // No se cumple la condición. 
}


// Corrección del orden en las validaciones.
if (puntaje > 936) { // Primero evalúa si 'puntaje' es mayor que 936.
    // Imprime un mensaje si el puntaje es mayor que 936.
    console.log('Excelente...!'); // No se cumple la condición.
} else if (puntaje > 333) { // Luego evalúa si 'puntaje' es mayor que 333.
    // Imprime un mensaje si el puntaje es mayor que 333.
    console.log('Buen puntaje... felicidades'); // Buen puntaje... felicidades
}

// Tercer ejemplo: Uso de múltiples estructuras 'if' en lugar de 'if...else'.
function revisarPuntaje() {
    if (puntaje > 936) { // Evalúa si 'puntaje' es mayor que 936.
        // Imprime un mensaje si es verdadero.
        console.log('Excelente...!'); // No se cumple la condición.
        return; // Sale de la función.
    }
    if (puntaje > 333) { // Evalúa si 'puntaje' es mayor que 333.
        // Imprime un mensaje si es verdadero.
        console.log('Buen puntaje... felicidades'); // Buen puntaje... felicidades
        return; // Sale de la función.
    }
}

// Llama a la función 'revisarPuntaje'.
revisarPuntaje();
