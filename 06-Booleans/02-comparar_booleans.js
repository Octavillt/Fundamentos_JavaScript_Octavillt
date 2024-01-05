// Comparación de valores booleanos en JavaScript

const boolean1 = true; // Se declara 'boolean1' como un booleano con el valor 'true'.
const boolean2 = false; // Se declara 'boolean2' como un booleano con el valor 'false'.

// Comparaciones estrictas entre booleanos
console.log(boolean1 === boolean2); // Muestra 'false', ya que 'true' no es igual a 'false'.
console.log(boolean1 === true); // Muestra 'true', confirma que 'boolean1' es igual a 'true'.
console.log(boolean2 === true); // Muestra 'false', 'boolean2' es 'false', no 'true'.
console.log(boolean1 === 'true'); // Muestra 'false', compara un booleano con una cadena de texto.

// Uso común pero innecesario de comparaciones en un condicional
if (boolean1 === true) {
    console.log('si es true'); // Se ejecuta si 'boolean1' es 'true'.
} else {
    console.log('no, no es true'); // Se ejecuta si 'boolean1' no es 'true'.
}

// Forma simplificada del condicional
// Esta versión es más limpia y hace lo mismo que el ejemplo anterior.
if (boolean1) {
    console.log('si es true');
} else {
    console.log('no, no es true');
}

// Contexto de uso: autenticación de usuario, gustos en fotos, acceso a páginas, etc.
