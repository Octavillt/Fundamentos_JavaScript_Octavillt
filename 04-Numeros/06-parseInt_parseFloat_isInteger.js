// Funciones para Convertir a Números

// Declaración de diferentes tipos de datos
const numero1 = "20"; // 'numero1' es un string que representa un número entero.
const numero2 = "20.2"; // 'numero2' es un string que representa un número con decimales.
const numero3 = "Uno"; // 'numero3' es un string que no representa un número.
const numero4 = 20; // 'numero4' es un número entero.

// Muestra '20' como string.
console.log(numero1); // "20"

// Convertir de Strings a Números Flotantes o Enteros
console.log(Number.parseInt(numero1)); // 20
// Number.parseInt(numero1) convierte el string 'numero1' a un número entero. Resultado: 20.

console.log(Number.parseFloat(numero2)); // 20.2
// Number.parseFloat(numero2) convierte el string 'numero2' a un número flotante. Resultado: 20.2.

console.log(Number.parseInt(numero3)); // NaN
// Number.parseInt(numero3) intenta convertir 'numero3' a un número, pero falla porque 'Uno' no es numérico. Resultado: NaN (Not a Number).

// Revisar si un Número es Entero
console.log(Number.isInteger(numero4)); // true
// Number.isInteger(numero4) verifica si 'numero4' es un número entero. Resultado: true.

console.log(Number.isInteger(numero3)); // false
// Number.isInteger(numero3) intenta verificar si 'numero3' es un número entero, pero devuelve false porque 'numero3' es un string y no un número.

// Convertir String a Número
console.log(numero4.toString()); // "20"
// numero4.toString() convierte el número 'numero4' a un string. Resultado: '20'.
