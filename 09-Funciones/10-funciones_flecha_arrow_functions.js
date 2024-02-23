// Introducción a las Funciones Flecha en JavaScript

/*
Ejemplo de una función tradicional.
Esta es una función anónima asignada a la variable 'aprendiendo'.
Usa la sintaxis tradicional de 'function'.
*/
const aprendiendo = function () {
    console.log('Aprendiendo JavaScript con Octavillt'); // Aprendiendo JavaScript con Octavillt
}

/*
Ejemplo de una función flecha.
Esta es una función flecha asignada a la variable 'aprendiendo1'.
Las funciones flecha usan la sintaxis '() =>' en lugar de 'function'.
*/
const aprendiendo1 = () => {
    console.log('Aprendiendo JavaScript con Octavillt'); // Aprendiendo JavaScript con Octavillt
}

/*
Función flecha de una sola línea sin llaves.
Si la función flecha solo contiene una línea, se pueden omitir las llaves y el 'return' implícito.
Esta forma es más concisa y se utiliza a menudo para funciones simples o callbacks.
*/
const aprendiendo2 = () => console.log('Aprendiendo JavaScript con Octavillt'); // Aprendiendo JavaScript con Octavillt

/*
Función flecha que retorna un valor.
Esta función flecha retorna directamente una cadena de texto.
No se necesitan llaves ni la palabra clave 'return' para una sola expresión que retorna un valor.
*/
const aprendiendo3 = () => 'Aprendiendo JavaScript con Octavillt';


// Ejecución de las funciones y visualización de sus resultados.

// Imprime el resultado de la función 'aprendiendo'.
aprendiendo();

// Imprime el resultado de la función 'aprendiendo1'.
aprendiendo1();

// Imprime el resultado de la función 'aprendiendo2'.
aprendiendo2();

// Imprime el resultado de la función 'aprendiendo3'.
console.log(aprendiendo3()); // Aprendiendo JavaScript con Octavillt
