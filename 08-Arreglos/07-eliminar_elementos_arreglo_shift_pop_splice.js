/*
Introducción a la eliminación de elementos de un arreglo en JavaScript.
En JavaScript, los arreglos son estructuras dinámicas, lo que significa que su tamaño puede cambiar durante la ejecución del programa.
Hay varios métodos para eliminar elementos de un arreglo: 'shift', 'pop' y 'splice'.
*/

// Declaración de un arreglo vacío 'carrito'.
const carrito = []; // Inicialmente, 'carrito' no contiene elementos.

// Creación de objetos 'producto', 'producto2' y 'producto3'.
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 333
}; // Representa un monitor.

const producto2 = {
    nombre: 'Celular',
    precio: 888
}; // Representa un celular.

const producto3 = {
    nombre: 'Teclado',
    precio: 369
}; // Representa un teclado.

// Añadiendo los productos al arreglo 'carrito'.

// Añade 'producto' al final del arreglo.
carrito.push(producto);
// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // [ { nombre: 'Monitor 20 Pulgadas', precio: 333 } ]


// Añade 'producto2' al final del arreglo.
carrito.push(producto2);
// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // [ { nombre: 'Monitor 20 Pulgadas', precio: 333 }, { nombre: 'Celular', precio: 888 } ]


// Añade 'producto3' al inicio del arreglo.
carrito.unshift(producto3);
// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // [ { nombre: 'Teclado', precio: 369 }, { nombre: 'Monitor 20 Pulgadas', precio: 333 }, { nombre: 'Celular', precio: 888 } ]


/*
Eliminar el primer elemento del arreglo.
Este método 'shift' elimina el primer elemento del arreglo 'carrito'.
Si 'shift' se ejecuta, 'producto3' (Teclado) será eliminado.
*/
carrito.shift();
// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // [ { nombre: 'Monitor 20 Pulgadas', precio: 333 }, { nombre: 'Celular', precio: 888 } ]

/*
Eliminar el último elemento del arreglo.
Este método 'pop' elimina el último elemento del arreglo 'carrito'.
Si 'pop' se ejecuta, 'producto2' (Celular) será eliminado.
*/
carrito.pop();
// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // [ { nombre: 'Monitor 20 Pulgadas', precio: 333 } ]

/*
El primer argumento (1) especifica la posición inicial para el borrado.
El segundo argumento (0) especifica cuántos elementos se deben eliminar.
En este caso, como el segundo argumento es 0, no se elimina ningún elemento.
*/

// En este caso, no se elimina ningún elemento.
// carrito.splice(1, 0); 

/*
Eliminar elementos específicos usando 'splice'.
Esto eliminaría dos elementos a partir del índice 1.
En este caso, se eliminarían 'producto' y 'producto2' del arreglo.
*/
carrito.splice(1, 2);
// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // [ { nombre: 'Monitor 20 Pulgadas', precio: 333 } ]
