// Declaración de un arreglo vacío llamado 'carrito'.
const carrito = [];

// Creación de un objeto 'producto' que representa un monitor.
const producto = {
    nombre: 'Monitor 33 Pulgadas',
    precio: 333
};

// Creación de un segundo objeto 'producto2' que representa un celular.
const producto2 = {
    nombre: 'Celular',
    precio: 369
};

// Uso del método 'push' para agregar 'producto' al final del arreglo 'carrito'.
carrito.push(producto);
// Uso del método 'push' para agregar 'producto2' al final del arreglo 'carrito'.
carrito.push(producto2);

// Creación de un tercer objeto 'producto3' que representa un teclado.
const producto3 = {
    nombre: 'Teclado',
    precio: 693
};

// Uso del método 'unshift' para agregar 'producto3' al inicio del arreglo 'carrito'.
carrito.unshift(producto3);

// Imprimir el arreglo 'carrito' en la consola.
console.log(carrito); // Muestra los tres productos en el 'carrito', con 'producto3' al principio.
