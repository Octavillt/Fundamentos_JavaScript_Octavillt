// Dieferente de, comparador estricto, diferente estricto

const puntaje = 1000; // Declara una constante 'puntaje' con valor numérico 1000.
const puntaje2 = '1000'; // Declara una constante 'puntaje2' con valor de cadena '1000'.

// No es igual
if (puntaje != 1000) { // Evalúa si 'puntaje' NO es igual a 1000 usando comparador no estricto.
    console.log("Si! es diferente!"); // Se ejecuta si la condición es verdadera.
} else {
    console.log("No, no es diferente"); // Se ejecuta si la condición es falsa.
}

// Comparador estricto de tipo y valor
if (puntaje === puntaje2) { // Comprueba igualdad estricta entre 'puntaje' y 'puntaje2'.
    console.log("Si es igual!"); // Se ejecuta si la condición es verdadera.
} else {
    console.log("No no es igual"); // Se ejecuta si la condición es falsa.
}

// Comparador estricto de tipo y valor
if (puntaje2 !== puntaje) { // Comprueba diferencia estricta entre 'puntaje2' y 'puntaje'.
    console.log("Si es DIFERENTE (ESTRICTO)!"); // Se ejecuta si la condición es verdadera.
} else {
    console.log("No no es igual"); // Se ejecuta si la condición es falsa.
}
