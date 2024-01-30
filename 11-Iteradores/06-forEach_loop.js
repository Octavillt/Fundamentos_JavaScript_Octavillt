/*
Propósito: Ejecutar una función en cada elemento de un arreglo.
Retorno: No retorna nada (undefined).
Modificación del Arreglo Original: No modifica el arreglo original, pero la función proporcionada puede hacerlo.
Uso Común: Se usa para ejecutar un bloque de código para cada elemento del arreglo sin la necesidad de crear un nuevo arreglo.
*/
let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Utiliza forEach para iterar sobre el array 'pendientes'.
// La función dentro de forEach recibe cada elemento ('pendiente') y su índice ('indice').
pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`); // Imprime el índice y el valor de cada elemento.
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
    console.log(`Agregaste: ${producto.nombre} - $${producto.precio}`); // Imprime información de cada producto.
});

const numeros = [1, 2, 3, 4, 5];

// Suma los valores de un array utilizando forEach.
let suma = 0;
numeros.forEach(numero => {
    suma += numero; // Acumula la suma de los elementos del array.
});
console.log(`La suma es: ${suma}`); // Imprime la suma total.
