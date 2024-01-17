// Ejemplo de Hoisting en Declaraciones de Funciones y Expresiones de Funciones

// Llamada a la función 'sumar' antes de su declaración.
sumar();
// Esta llamada a 'sumar()' funciona debido al hoisting. JavaScript 'mueve' las declaraciones de función al inicio del ámbito.

// Declaración de la función 'sumar'.
function sumar() {
    console.log(2 + 2); // Imprime '4' en la consola.
    // 'sumar' es una función que imprime el resultado de 2 + 2.
}
// Las declaraciones de función son elevadas, lo que significa que pueden ser llamadas antes de ser definidas en el código.

// Llamada a la función 'sumar2' antes de su declaración como expresión de función.
sumar2(); // Esta línea causará un error porque 'sumar2' aún no está definida.
// En el caso de expresiones de función, no se aplica el hoisting de la misma manera que con las declaraciones de función.

// Declaración de la función 'sumar2' como expresión de función.
const sumar2 = function () {
    console.log(3 + 3); // Imprime '6' en la consola.
    // 'sumar2' es una expresión de función que imprime el resultado de 3 + 3.
}
// Las expresiones de función no se benefician del hoisting. 'sumar2' solo puede ser llamada después de su definición.

/*
Comentarios adicionales sobre el código:
1. Hoisting en Declaraciones de Función: En JavaScript, las declaraciones de función se procesan antes de que se ejecute cualquier código, lo que permite llamar a funciones antes de que sean declaradas en el código.
2. Limitaciones del Hoisting en Expresiones de Función: A diferencia de las declaraciones de función, las expresiones de función no se elevan. Esto significa que una expresión de función solo puede ser llamada después de que ha sido definida.
3. Uso Práctico: Comprender estas diferencias es crucial para evitar errores y escribir código más predecible y mantenible.
*/
