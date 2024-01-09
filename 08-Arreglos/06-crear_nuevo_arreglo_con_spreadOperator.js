/*
Introducción al Spread Operator en JavaScript.
El Spread Operator (Operador de Propagación) se utiliza para expandir elementos de un iterable (como un arreglo) en lugares
donde se esperan múltiples elementos (por ejemplo, en otro arreglo).
*/
// Declaración de un arreglo vacío llamado 'carrito'.
const carrito = []; // Inicialmente, 'carrito' no contiene ningún elemento.

// Creación de objetos que representan productos.
// Cada producto tiene un 'nombre' y un 'precio'.
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 500
}; // Representa un monitor.

const producto2 = {
    nombre: 'Celular',
    precio: 500
}; // Representa un celular.

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}; // Representa un teclado.

// Añadiendo 'producto' al arreglo 'carrito' usando el Spread Operator.
let resultado = [...carrito, producto];
// Aquí, [...carrito] crea una copia de todos los elementos en 'carrito' (actualmente vacío),
// y luego 'producto' se añade al final de esta copia. 'resultado' es ahora un nuevo arreglo que incluye 'producto'.

// Añadiendo 'producto2' al nuevo arreglo 'resultado'.
resultado = [...resultado, producto2];
// Similar al paso anterior, se crea una copia de 'resultado' y se añade 'producto2' al final.

// Añadiendo 'producto3' al inicio del arreglo 'resultado'.
resultado = [producto3, ...resultado];
// En este caso, 'producto3' se añade primero, y luego se expanden los elementos de 'resultado'.
// 'producto3' se convierte en el primer elemento del nuevo arreglo.

/*
Nota sobre Programación Declarativa vs Imperativa:
El uso del Spread Operator se considera un enfoque declarativo. Es decir, se declara "qué" se quiere lograr (un nuevo arreglo con elementos añadidos),
en lugar de "cómo" hacerlo (a través de pasos específicos como loops o asignaciones individuales), lo que sería un enfoque imperativo.
Ambos enfoques son muy utilizados en JavaScript, y cada uno tiene sus ventajas dependiendo del contexto y la preferencia del desarrollador.
*/

// Imprimiendo el arreglo 'resultado' en forma de tabla en la consola.
console.table(resultado); // Esto muestra una tabla con los productos en el orden en que fueron añadidos: Teclado, Monitor, Celular.
