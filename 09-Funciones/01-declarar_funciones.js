// Declaración de Función en JavaScript

// Declaración de una función llamada 'sumar'.
function sumar() {
    console.log(2 + 2); // Esta función imprime el resultado de 2 + 2 en la consola.
    // 'console.log' se utiliza para mostrar el resultado en la consola.
}
sumar(); // Llamada a la función 'sumar' para ejecutar el código dentro de ella.
// Al llamar a 'sumar()', se ejecuta el código dentro de la función y se imprime '4' en la consola.

/*
La declaración de función 'sumar' es una forma tradicional de definir una función en JavaScript.
Una característica clave es que las declaraciones de función se 'elevan' (hoisting), lo que significa que pueden ser llamadas antes de que aparezcan en el código.
*/

// Expresión de Función en JavaScript

// Declaración de una función utilizando una expresión de función.
const sumar2 = function () {
    console.log(3 + 3); // Esta función imprime el resultado de 3 + 3 en la consola.
    // Aquí, se utiliza una función anónima asignada a la variable 'sumar2'.
}
sumar2(); // Llamada a la función 'sumar2'.
// Al llamar a 'sumar2()', se ejecuta el código de la función anónima y se imprime '6' en la consola.

/*
Las expresiones de función, como 'sumar2', son funciones anónimas asignadas a variables.
A diferencia de las declaraciones de función, las expresiones de función no se 'elevan' y solo pueden ser llamadas después de su definición.
Esto ofrece una mayor flexibilidad en ciertos casos, como en la programación funcional o al definir funciones como argumentos de otras funciones.
*/

// Comparación entre Declaración de Función y Expresión de Función
