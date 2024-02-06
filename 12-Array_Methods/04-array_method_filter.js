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
console.log(resultado); // Imprime los productos filtrados.

// Uso de 'filter' para obtener todos los productos cuyo precio es menor a 600.
resultado = carrito.filter(producto => producto.precio < 600);
console.log(resultado); // Imprime los productos filtrados.

// Declaración de otra variable 'resultado2' para diferenciar los resultados.
let resultado2;

// Uso de 'filter' para obtener los productos cuyo nombre es exactamente 'Celular'.
resultado2 = carrito.filter(producto => producto.nombre === 'Celular');
console.log(resultado2); // Imprime los productos filtrados.

// Uso de 'filter' para obtener todos los productos excepto aquellos cuyo nombre es 'Laptop'.
resultado2 = carrito.filter(producto => producto.nombre !== 'Laptop');
console.log(resultado2); // Imprime los productos filtrados.
