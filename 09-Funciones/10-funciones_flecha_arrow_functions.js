// Introducción a las Funciones Flecha en JavaScript

// Ejemplo de una función tradicional.
const aprendiendo = function () {
    console.log('Aprendiendo JavaScript con Octavillt');
    // Esta es una función anónima asignada a la variable 'aprendiendo'.
    // Usa la sintaxis tradicional de 'function'.
}

// Ejemplo de una función flecha.
const aprendiendo1 = () => {
    console.log('Aprendiendo JavaScript con Octavillt');
    // Esta es una función flecha asignada a la variable 'aprendiendo1'.
    // Las funciones flecha usan la sintaxis '() =>' en lugar de 'function'.
}

// Función flecha de una sola línea sin llaves.
const aprendiendo2 = () => console.log('Aprendiendo JavaScript con Octavillt');
// Si la función flecha solo contiene una línea, se pueden omitir las llaves y el 'return' implícito.
// Esta forma es más concisa y se utiliza a menudo para funciones simples o callbacks.

// Función flecha que retorna un valor.
const aprendiendo3 = () => 'Aprendiendo JavaScript con Octavillt';
// Esta función flecha retorna directamente una cadena de texto.
// No se necesitan llaves ni la palabra clave 'return' para una sola expresión que retorna un valor.

// Ejecución de las funciones y visualización de sus resultados.
console.log(aprendiendo());  // Ejecuta y muestra el resultado de 'aprendiendo'.
console.log(aprendiendo1()); // Ejecuta y muestra el resultado de 'aprendiendo1'.
console.log(aprendiendo2()); // Ejecuta y muestra el resultado de 'aprendiendo2'.
console.log(aprendiendo3()); // Ejecuta y muestra el resultado de 'aprendiendo3'.
