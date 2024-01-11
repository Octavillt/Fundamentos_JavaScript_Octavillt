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
carrito.push(producto);
// 'push' añade el 'producto' al final del arreglo 'carrito'.

// Uso del método 'push' para agregar 'producto2' al final del arreglo 'carrito'.
carrito.push(producto2);
// 'push' también añade 'producto2' al final del arreglo, después de 'producto'.

// Creación de un tercer objeto 'producto3' que representa un teclado.
const producto3 = {
    nombre: 'Teclado',
    precio: 693
};
// 'producto3' es un tercer objeto, que también se añadirá al carrito.

// Uso del método 'unshift' para agregar 'producto3' al inicio del arreglo 'carrito'.
carrito.unshift(producto3);
// 'unshift' añade 'producto3' al comienzo del arreglo 'carrito', moviendo los otros elementos una posición hacia atrás.

// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // Muestra los tres productos en el 'carrito', con 'producto3' al principio.
// Esta línea imprime el contenido final del arreglo 'carrito', mostrando el orden de los elementos después de las operaciones de 'push' y 'unshift'.
