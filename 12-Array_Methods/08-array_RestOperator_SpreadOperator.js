/*
El operador de propagación (Spread Operator) (...) se utiliza para expandir elementos iterables, como un array,
en lugares donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para literales de array),
o para descomponer objetos en lugares donde se esperan cero o más pares clave-valor (para literales de objeto).

Caso de uso con arrays:

// Tenemos dos arrays de números
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Queremos combinar estos dos arrays en uno usando el operador de propagación
let arrayCombinado = [...array1, ...array2];

// Esto imprimirá '[1, 2, 3, 4, 5, 6]'
console.log(arrayCombinado); // [1, 2, 3, 4, 5, 6]

En este ejemplo, usamos el operador de propagación (...) para expandir array1 y array2 dentro de un nuevo array.
El resultado es un nuevo array que contiene todos los elementos de array1 seguidos de todos los elementos de array2.

También se puede usar para copiar un array:

let arrayOriginal = [1, 2, 3];

// Esto crea una copia de arrayOriginal
let arrayCopia = [...arrayOriginal];

// Esto imprimirá '[1, 2, 3]'
console.log(arrayCopia); // [1, 2, 3]

Y para pasar elementos de un array como argumentos a una función:
let numeros = [1, 2, 3];

// Esto imprimirá '3'
console.log(Math.max(...numeros)); // 3

En este último ejemplo, ...numeros pasa los elementos de numeros como argumentos separados a la función Math.max().
*/
// Se declara un array 'meses' con nombres de meses.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Se declara un array 'carrito' que contiene objetos con productos y sus precios.
const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },
];

console.log(meses); // [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ]

// Uso del operador de propagación (spread) para agregar 'Julio' al final del array 'meses'.
const meses2 = [...meses, 'Julio'];
// Muestra 'meses' con 'Julio' añadido al final.
console.log(meses2); // [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio' ]

// Uso del operador de propagación para agregar 'Julio' al inicio del array 'meses'.
const meses3 = ['Julio', ...meses];
// Muestra 'meses' con 'Julio' añadido al inicio.
console.log(meses3); // [ 'Julio', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ]

// Se declara un objeto 'producto'.
const producto = { producto: 'SSD', precio: 693 };
// Muestra el objeto 'producto' en consola.
console.log(producto); // { producto: 'SSD', precio: 693 }

// Uso del operador de propagación para agregar el objeto 'producto' al final del array 'carrito'.
const carrito2 = [...carrito, producto];
// Muestra 'carrito' con 'producto' añadido al final.
console.log(carrito2); /*
[
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },
    { producto: 'SSD', precio: 693 }
]
*/

// Uso del operador de propagación para agregar el objeto 'producto' al inicio del array 'carrito'.
const carrito3 = [producto, ...carrito];
// Muestra 'carrito' con 'producto' añadido al inicio.
console.log(carrito3); /*
[
    { producto: 'SSD', precio: 693 },
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 }
]
*/

