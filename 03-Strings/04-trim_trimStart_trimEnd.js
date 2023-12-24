// Manejo de espacios en cadenas de texto en JavaScript

const producto = '        Monitor 20 Pulgadas      ';
// 'producto' es una cadena con espacios al inicio y al final.

console.log(producto);
// Muestra 'producto' tal cual, incluyendo espacios al inicio y al final.

console.log(producto.length);
// Muestra la longitud de 'producto', incluyendo los espacios.

// Eliminar espacios al inicio de una cadena
console.log(producto.trimStart());
// .trimStart() elimina todos los espacios en blanco al inicio de 'producto'.

// Eliminar espacios al final de una cadena
console.log(producto.trimEnd());
// .trimEnd() elimina todos los espacios en blanco al final de 'producto'.

// Encadenar métodos para eliminar espacios tanto al inicio como al final
console.log(producto.trimStart().trimEnd());
/* Encadenamiento de .trimStart().trimEnd() para eliminar espacios al inicio y al final de 'producto'.
   Esto es útil para aplicar múltiples métodos en una sola línea. */

// Uso de trim para eliminar espacios al inicio y al final
console.log(producto.trim().length);
/* .trim() elimina espacios tanto al inicio como al final de 'producto'.
   Al calcular .length después de .trim(), obtenemos la longitud de la cadena sin los espacios. */
