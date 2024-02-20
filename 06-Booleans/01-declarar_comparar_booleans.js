// Declaración y comparación de valores booleanos en JavaScript

// Declaración de booleanos
const boolean1 = true; // Se declara 'boolean1' como un booleano con el valor 'true'.
const boolean2 = false; // Se declara 'boolean2' como un booleano con el valor 'false'.
const boolean3 = 'true'; // Se declara 'boolean3' como una cadena de texto con el valor 'true'.

// Impresión de los valores booleanos
// Muestra 'true' en la consola.
console.log(boolean1); // true

// Muestra 'false' en la consola.
console.log(boolean2); // false

// Verificación de tipos de datos
// Muestra 'boolean', indicando que 'boolean1' es de tipo booleano.
console.log(typeof boolean1); // boolean

// Comparación de booleanos y cadenas
// Muestra 'false'. Aunque 'boolean3' tiene el texto 'true', no es un valor booleano.
console.log(boolean1 == boolean3); // false

// Muestra 'false'. Esta comparación es más estricta porque también verifica el tipo de dato.
console.log(boolean1 === boolean3); // false

// Creación de booleanos con el constructor 'new Boolean'
const boolean4 = new Boolean(true); // Se crea 'boolean4' utilizando el constructor 'new Boolean'.
// Muestra un objeto Boolean.
console.log(boolean4); // [Boolean: true]

// Muestra 'object'. A diferencia de los booleanos primitivos, 'boolean4' es un objeto.
console.log(typeof boolean4); // object
