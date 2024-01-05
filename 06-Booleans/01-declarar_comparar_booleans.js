// Declaración y comparación de valores booleanos en JavaScript

// Declaración de booleanos
const boolean1 = true; // Se declara 'boolean1' como un booleano con el valor 'true'.
const boolean2 = false; // Se declara 'boolean2' como un booleano con el valor 'false'.
const boolean3 = 'true'; // Se declara 'boolean3' como una cadena de texto con el valor 'true'.

// Impresión de los valores booleanos
console.log(boolean1); // Muestra 'true' en la consola.
console.log(boolean2); // Muestra 'false' en la consola.

// Verificación de tipos de datos
console.log(typeof boolean1); // Muestra 'boolean', indicando que 'boolean1' es de tipo booleano.

// Comparación de booleanos y cadenas
console.log(boolean1 == boolean3); // Muestra 'false'. Aunque 'boolean3' tiene el texto 'true', no es un valor booleano.
console.log(boolean1 === boolean3); // Muestra 'false'. Esta comparación es más estricta porque también verifica el tipo de dato.

// Creación de booleanos con el constructor 'new Boolean'
const boolean4 = new Boolean(true); // Se crea 'boolean4' utilizando el constructor 'new Boolean'.
console.log(boolean4); // Muestra un objeto Boolean.
console.log(typeof boolean4); // Muestra 'object'. A diferencia de los booleanos primitivos, 'boolean4' es un objeto.
