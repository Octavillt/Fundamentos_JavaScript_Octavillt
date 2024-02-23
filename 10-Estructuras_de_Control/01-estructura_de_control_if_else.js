// Estructura de control if-else 
/*
1.- La palabra clave if comienza la declaración y es seguida por una condición entre paréntesis. 
Esta condición puede ser cualquier expresión que JavaScript pueda evaluar como verdadera o falsa.
2.- Después de la condición, hay un bloque de código entre llaves {}. Este bloque de código se ejecutará
si la condición es verdadera.
3.- La palabra clave else se utiliza para especificar un bloque de código que se ejecutará si la condición es falsa.
El bloque else es opcional; puedes tener una declaración if sin un bloque else.
*/

const puntaje = '1000'; // Declara una constante 'puntaje' con el valor '1000' (como string).

// es igual
if (puntaje == 1000) { // Inicia un bloque if comprobando si 'puntaje' es igual a 1000 (como número).
    // Si la condición es verdadera, imprime "Si es igual!".
    console.log("Si es igual!"); // Sí, es igual.
} else { // Bloque else que se ejecuta si la condición del if no se cumple.
    // Imprime "No no es igual" si la condición del if es falsa.
    console.log("No no es igual"); // No se cumple la condición.
}
