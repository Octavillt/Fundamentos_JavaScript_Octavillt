// Comentarios adicionales sobre el hoisting en JavaScript:
/*
1. Hoisting en Declaraciones de Función: En JavaScript, las declaraciones de función se procesan antes de que se ejecute cualquier código, lo que permite llamar a funciones antes de que sean declaradas en el código.
2. Limitaciones del Hoisting en Expresiones de Función: A diferencia de las declaraciones de función, las expresiones de función no se elevan. Esto significa que una expresión de función solo puede ser llamada después de que ha sido definida.
3. Uso Práctico: Comprender estas diferencias es crucial para evitar errores y escribir código más predecible y mantenible.
*/

// Ejemplo de Hoisting en Declaraciones de Funciones y Expresiones de Funciones

// Llamada a la función 'sumar' antes de su declaración.
// Esta llamada a 'sumar()' funciona debido al hoisting. JavaScript 'mueve' las declaraciones de función al inicio del ámbito.
sumar();

// Declaración de una función llamada 'sumar'.
// Esta función imprime el resultado de 2 + 2 en la consola.
function sumar() {
    console.log(2 + 2); // 4
    // 'console.log' se utiliza para mostrar el resultado en la consola.
}
// Las declaraciones de función son elevadas, lo que significa que pueden ser llamadas antes de ser definidas en el código.

// Llamada a la función 'sumar2' antes de su declaración como expresión de función.
// En el caso de expresiones de función, no se aplica el hoisting de la misma manera que con las declaraciones de función.
sumar2(); // Esta línea causará un error porque 'sumar2' aún no está definida.

// Declaración de una función utilizando una expresión de función.
// Esta función imprime el resultado de 3 + 3 en la consola.
const sumar2 = function () {
    // Aquí, se utiliza una función anónima asignada a la variable 'sumar2'.
    console.log(3 + 3); // 6
}
// Las expresiones de función no se benefician del hoisting. 'sumar2' solo puede ser llamada después de su definición.