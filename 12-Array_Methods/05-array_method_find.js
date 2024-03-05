/*
El método find() se utiliza para encontrar el primer elemento de un array que cumple con la condición implementada por la función proporcionada.
Devuelve el primer elemento que cumple la condición, de lo contrario devuelve undefined si ningún elemento la cumple.

Caso de uso:

// Tenemos un array de números
let array = [1, 2, 3, 4, 5];

// Queremos encontrar el primer número en el array que es mayor que 3
let numero = array.find(elemento => elemento > 3);

// Esto imprimirá '4' porque el primer número que es mayor que 3 es 4
console.log(numero); // 4

En este ejemplo, la función que pasamos a find() es una función de flecha que toma un número y devuelve true si el número es mayor que 3.
find() pasa cada número del array a esta función y si alguna vez devuelve true, find() devuelve ese número.
Si la función nunca devuelve true (es decir, si ningún número en el array es mayor que 3), entonces find() devuelve undefined.
*/

// Se declara una constante 'carrito', la cual es un array de objetos. Cada objeto representa un producto con propiedades 'nombre' y 'precio'.
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

// Ejemplo usando el método 'forEach'. Este método recorre cada elemento del array.
let resultado = '';
carrito.forEach((producto, index) => {
    // Si el nombre del producto es 'Laptop', asigna ese producto a 'resultado'.
    if (producto.nombre === 'Laptop') {
        resultado = carrito[index]
    }
});
// Muestra el producto 'Laptop' en la consola.
console.log(resultado); // { nombre: 'Laptop', precio: 800 }

// Ejemplo usando el método '.find'.

// 'find' devuelve el primer elemento del array que cumple con la condición especificada.
const resultado2 = carrito.find(producto => producto.nombre === 'Audifonos');
// Muestra el producto 'Audifonos' en la consola.
console.log(resultado2); // { nombre: 'Audifonos', precio: 200 }

// 'find' devuelve el primer elemento del array que cumple con la condición especificada.
// Si hay múltiples elementos que cumplen con la condición, '.find' solo devuelve el primero.
const resultado3 = carrito.find(producto => producto.precio === 500);
// Muestra el primer producto con precio 500 en la consola.
console.log(resultado3); // { nombre: 'Monitor 20 Pulgadas', precio: 500 }
