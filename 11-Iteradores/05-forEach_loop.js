/*
El método forEach es una función de alto orden que se utiliza para iterar sobre los elementos de un array. 
Se utiliza para ejecutar una función en cada elemento del array.

Definición básica:
array.forEach(function(currentValue, index, arr), thisValue)

currentValue (obligatorio): El valor del elemento actual.
index (opcional): El índice del elemento actual.
arr (opcional): El array que está siendo recorrido.
thisValue (opcional): Un valor que se utilizará como this al ejecutar la función.
*/

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Utiliza forEach para iterar sobre el array 'pendientes'.
// La función dentro de forEach recibe cada elemento ('pendiente') y su índice ('indice').
pendientes.forEach((pendiente, indice) => {
    // Imprime el índice y el valor de cada elemento.
    console.log(`${indice} : ${pendiente}`); // 0 : Tarea, 1 : Comer, 2 : Proyecto, 3 : Estudiar JavaScript
});


const carrito = [
    { nombre: 'Monitor 23 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

// Itera sobre el array 'carrito' usando forEach.
// La función recibe cada objeto 'producto' del array.
carrito.forEach(producto => {
    // Imprime información de cada producto.
    console.log(`Agregaste: ${producto.nombre} - $${producto.precio}`); /* Agregaste: Monitor 23 Pulgadas - $500, Agregaste: Televisión 50 Pulgadas - 
    $700, Agregaste: Tablet  - $300, Agregaste: Audifonos - $200, Agregaste: Teclado - $50, Agregaste: Celular - $500 */
});


const numeros = [1, 2, 3, 4, 5];

// Suma los valores de un array utilizando forEach.
let suma = 0;
numeros.forEach(numero => {
    suma += numero; // Acumula la suma de los elementos del array.
});
// Imprime la suma total.
console.log(`La suma es: ${suma}`); // La suma es: 15
