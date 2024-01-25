const autenticado = true; // Declara una constante 'autenticado' y la inicializa como verdadera.

// Primer ejemplo: Comparación innecesaria.
if (autenticado === true) { // Aquí se compara si 'autenticado' es igual a 'true', lo cual es redundante.
    console.log('El Usuario esta autenticado'); // Imprime un mensaje si el usuario está autenticado.
}

const puntaje = 639; // Declara una constante 'puntaje' con valor 639.

// Segundo ejemplo: Orden incorrecto en las validaciones.

// if(puntaje > 333) {
//     console.log('Buen puntaje... felicidades');
// } else if(puntaje > 936) {
//     console.log('Excelente esfuerzo')
// }

// Corrección del orden en las validaciones.
if (puntaje > 936) { // Primero evalúa si 'puntaje' es mayor que 936.
    console.log('Excelente...!'); // Imprime un mensaje si el puntaje es mayor que 936.
} else if (puntaje > 333) { // Luego evalúa si 'puntaje' es mayor que 333.
    console.log('Buen puntaje... felicidades'); // Imprime un mensaje si el puntaje es mayor que 333.
}

// Tercer ejemplo: Uso de múltiples estructuras 'if' en lugar de 'if...else'.
function revisarPuntaje() {
    if (puntaje > 936) { // Evalúa si 'puntaje' es mayor que 936.
        console.log('Excelente...!'); // Imprime un mensaje si es verdadero.
        return; // Sale de la función.
    }
    if (puntaje > 333) { // Evalúa si 'puntaje' es mayor que 333.
        console.log('Buen puntaje... felicidades'); // Imprime un mensaje si es verdadero.
        return; // Sale de la función.
    }
}

revisarPuntaje(); // Llama a la función 'revisarPuntaje'.
