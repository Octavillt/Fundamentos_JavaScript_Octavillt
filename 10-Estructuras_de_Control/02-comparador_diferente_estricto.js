// Dieferente de, comparador estricto, diferente estricto
/*
El operador de comparación diferente (!=) devuelve verdadero si los operandos no son iguales.
El operador de comparación estricta (!==) devuelve verdadero si los operandos no son iguales y/o no son del mismo tipo.
El operador de comparación estricta (!==) devuelve falso si los operandos son iguales y del mismo tipo.
EL operador de comparación diferente (!=) devuelve falso si los operandos son iguales.
El operador de comparación estricta (!==) devuelve verdadero si los operandos son diferentes y/o no son del mismo tipo.
El operador de comparación estricta (!==) devuelve falso si los operandos son iguales y del mismo tipo.
*/

const puntaje = 1000; // Declara una constante 'puntaje' con valor numérico 1000.
const puntaje2 = '1000'; // Declara una constante 'puntaje2' con valor de cadena '1000'.

// No es igual
if (puntaje != 1000) { // Evalúa si 'puntaje' NO es igual a 1000 usando comparador no estricto.
    // Se ejecuta si la condición es verdadera.
    console.log("Si! es diferente!"); // No se cumple la condición.
} else {
    // Se ejecuta si la condición es falsa.
    console.log("No, no es diferente"); // No, no es diferente.
}

// Comparador estricto de tipo y valor
if (puntaje === puntaje2) { // Comprueba igualdad estricta entre 'puntaje' y 'puntaje2'.
    // Se ejecuta si la condición es verdadera.
    console.log("Si es igual!"); // No se cumple la condición.
} else {
    // Se ejecuta si la condición es falsa.
    console.log("No no es igual"); // No, no es igual.
}

// Comparador estricto de tipo y valor
if (puntaje2 !== puntaje) { // Comprueba diferencia estricta entre 'puntaje2' y 'puntaje'.
    // Se ejecuta si la condición es verdadera.
    console.log("Si es DIFERENTE (ESTRICTO)!"); // Si es DIFERENTE (ESTRICTO)!
} else {
    // Se ejecuta si la condición es falsa.
    console.log("No no es igual"); // No se cumple la condición.
}
