/*
El método filter() se utiliza para crear un nuevo array con todos los elementos que pasen una prueba (proporcionada como una función).

Caso de uso:

// Tenemos un array de números
let array = [1, 2, 3, 4, 5];

// Queremos crear un nuevo array con los números que son mayores que 2
let arrayFiltrado = array.filter(numero => numero > 2);

// Esto imprimirá '[3, 4, 5]' porque esos son los números en el array que son mayores que 2
console.log(arrayFiltrado); // [3, 4, 5]

En este ejemplo, la función que pasamos a filter() es una función de flecha que toma un número y devuelve true si el número es mayor que 2.
filter() pasa cada número del array a esta función y si devuelve true, ese número se incluye en el nuevo array.
Al final, filter() devuelve el nuevo array.
*/

// Declaración de un array 'carrito' que contiene objetos representando productos con 'nombre' y 'precio'.
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// Declaración de una variable 'resultado' para almacenar los resultados de las operaciones 'filter'.
let resultado;

// Uso de 'filter' para obtener todos los productos cuyo precio es mayor a 400.
resultado = carrito.filter(producto => producto.precio > 400);
// Imprime los productos filtrados.
console.log(resultado); /*
[
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Laptop', precio: 800 }
]
*/

// Uso de 'filter' para obtener todos los productos cuyo precio es menor a 600.
resultado = carrito.filter(producto => producto.precio < 600);
// Imprime los productos filtrados.
console.log(resultado); /*
[
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 }
]
*/

// Declaración de otra variable 'resultado2' para diferenciar los resultados.
let resultado2;

// Uso de 'filter' para obtener los productos cuyo nombre es exactamente 'Celular'.
resultado2 = carrito.filter(producto => producto.nombre === 'Celular');
// Imprime los productos filtrados.
console.log(resultado2); // [ { nombre: 'Celular', precio: 500 } ]

// Uso de 'filter' para obtener todos los productos excepto aquellos cuyo nombre es 'Laptop'.
resultado2 = carrito.filter(producto => producto.nombre !== 'Laptop');
// Imprime los productos filtrados.
console.log(resultado2);  /*
[
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 }
]
*/
