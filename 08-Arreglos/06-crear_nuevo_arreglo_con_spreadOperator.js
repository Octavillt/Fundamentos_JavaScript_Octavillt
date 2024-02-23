/*
Introducción al Spread Operator en JavaScript.
El Spread Operator (Operador de Propagación) se utiliza para expandir elementos de un iterable (como un arreglo) en lugares
donde se esperan múltiples elementos (por ejemplo, en otro arreglo).
*/

// Declaración de un arreglo vacío llamado 'carrito'.
const carrito = []; // Inicialmente, 'carrito' no contiene ningún elemento.
// Aquí, 'carrito' se declara como un arreglo vacío para almacenar productos.

// Creación de objetos que representan productos.
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 500
}; // 'producto' es un objeto que representa un monitor.

const producto2 = {
    nombre: 'Celular',
    precio: 500
}; // 'producto2' es un objeto que representa un celular.

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}; // 'producto3' es un objeto que representa un teclado.

// Añadiendo 'producto' al arreglo 'carrito' usando el Spread Operator.

// Aquí, [...carrito] crea una copia de todos los elementos en 'carrito' (que está vacío),
// y luego 'producto' se añade al final de esta copia. 'resultado' es ahora un nuevo arreglo que incluye 'producto'.
let resultado = [...carrito, producto];

// Muestra el contenido del arreglo 'resultado' después de agregar 'producto'.
console.log(resultado); // [ { nombre: 'Monitor 20 Pulgadas', precio: 500 } ]

// Añadiendo 'producto2' al nuevo arreglo 'resultado'.
// Similar al paso anterior, se crea una copia de 'resultado' y se añade 'producto2' al final.
resultado = [...resultado, producto2];

// Muestra el contenido del arreglo 'resultado' después de agregar 'producto2'.
console.log(resultado); // [ { nombre: 'Monitor 20 Pulgadas', precio: 500 }, { nombre: 'Celular', precio: 500 } ]

// Añadiendo 'producto3' al inicio del arreglo 'resultado'.
// En este caso, 'producto3' se añade primero, y luego se expanden los elementos de 'resultado'.
// 'producto3' se convierte en el primer elemento del nuevo arreglo.
resultado = [producto3, ...resultado];

// Muestra el contenido del arreglo 'resultado' después de agregar 'producto3'.
console.log(resultado); // [ { nombre: 'Teclado', precio: 50 }, { nombre: 'Monitor 20 Pulgadas', precio: 500 }, { nombre: 'Celular', precio: 500 } ]

/*
Nota sobre Programación Declarativa vs Imperativa:
El uso del Spread Operator se considera un enfoque declarativo. Es decir, se declara "qué" se quiere lograr (un nuevo arreglo con elementos añadidos),
en lugar de "cómo" hacerlo (a través de pasos específicos como loops o asignaciones individuales), lo que sería un enfoque imperativo.
Ambos enfoques son muy utilizados en JavaScript, y cada uno tiene sus ventajas dependiendo del contexto y la preferencia del desarrollador.
*/

// Imprimiendo el arreglo 'resultado' en forma de tabla en la consola.
// Esto muestra una tabla con los productos en el orden en que fueron añadidos: Teclado, Monitor, Celular.
console.table(resultado); /*
┌─────────┬───────────────────────┬────────┐
│ (index) │ nombre                │ precio │
├─────────┼───────────────────────┼────────┤
│ 0       │ 'Teclado'             │ 50     │
│ 1       │ 'Monitor 20 Pulgadas' │ 500    │
│ 2       │ 'Celular'             │ 500    │
└─────────┴───────────────────────┴────────┘
*/