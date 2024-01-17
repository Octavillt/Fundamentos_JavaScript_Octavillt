// Uso de Parámetros en Funciones Flecha

// Ejemplo 1: Función flecha con un parámetro.
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
// Esta función flecha toma un parámetro 'tecnologia' y lo imprime.
// Los paréntesis alrededor del parámetro son opcionales cuando solo hay un parámetro.
aprendiendo('JavaScript'); // Llamada a la función con 'JavaScript' como argumento.

// Ejemplo 2: Función flecha con un parámetro, sin paréntesis.
const aprendiendo2 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
// En esta variante, se omite el uso de paréntesis para un único parámetro.
// Esto es una característica de las funciones flecha que permite una sintaxis aún más concisa.
aprendiendo2('JavaScript'); // Llamada a la función, similar al ejemplo anterior.

// Ejemplo 3: Función flecha con múltiples parámetros.
const aprendiendo3 = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
// Esta función flecha toma dos parámetros: 'tecn1' y 'tecn2'.
// Cuando hay más de un parámetro, los paréntesis son obligatorios.
aprendiendo3('JS', 'ES'); // Llamada a la función con dos argumentos: 'JS' y 'ES'.

/*
Comentarios Adicionales:

- Las funciones flecha proporcionan una forma más concisa y clara de manejar parámetros en funciones.
- Son especialmente útiles para funciones cortas, callbacks y situaciones donde se desea evitar la complejidad del contexto de 'this'.
- La elección entre usar paréntesis o no en un solo parámetro depende del estilo y las preferencias del desarrollador, pero es importante mantener la consistencia en todo el código.
*/
