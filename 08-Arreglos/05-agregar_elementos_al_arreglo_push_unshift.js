// Declaración de un arreglo vacío llamado 'carrito'.
const carrito = [];
// Aquí, 'carrito' es inicialmente un arreglo vacío destinado a almacenar productos.

// Creación de un objeto 'producto' que representa un monitor.
const producto = {
    nombre: 'Monitor 33 Pulgadas',
    precio: 333
};
// 'producto' es un objeto con propiedades 'nombre' y 'precio'.

// Creación de un segundo objeto 'producto2' que representa un celular.
const producto2 = {
    nombre: 'Celular',
    precio: 369
};
// 'producto2' es otro objeto representando un producto diferente.

// Uso del método 'push' para agregar 'producto' al final del arreglo 'carrito'.
// 'push' añade el 'producto' al final del arreglo 'carrito'.
carrito.push(producto);

// Muestra el contenido del arreglo 'carrito' después de agregar 'producto'.
console.log(carrito); // [ { nombre: 'Monitor 33 Pulgadas', precio: 333 } ]

// Uso del método 'push' para agregar 'producto2' al final del arreglo 'carrito'.
// 'push' también añade 'producto2' al final del arreglo, después de 'producto'.
carrito.push(producto2);

// Muestra el contenido del arreglo 'carrito' después de agregar 'producto2'.
console.log(carrito); // [ { nombre: 'Monitor 33 Pulgadas', precio: 333 }, { nombre: 'Celular', precio: 369 } ]

// Creación de un tercer objeto 'producto3' que representa un teclado.
// 'producto3' es un tercer objeto, que también se añadirá al carrito.
const producto3 = {
    nombre: 'Teclado',
    precio: 693
};

// Uso del método 'unshift' para agregar 'producto3' al inicio del arreglo 'carrito'.
// 'unshift' añade 'producto3' al comienzo del arreglo 'carrito', moviendo los otros elementos una posición hacia atrás.
carrito.unshift(producto3);

// Muestra los tres productos en el 'carrito', con 'producto3' al principio.
// Esta línea imprime el contenido final del arreglo 'carrito', mostrando el orden de los elementos después de las operaciones de 'push' y 'unshift'.
console.log(carrito); // [ { nombre: 'Teclado', precio: 693 }, { nombre: 'Monitor 33 Pulgadas', precio: 333 }, { nombre: 'Celular', precio: 369 } ]
