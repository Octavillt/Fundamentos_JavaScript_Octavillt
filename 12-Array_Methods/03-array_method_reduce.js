// Declaración de un array 'carrito' que contiene varios objetos. Cada objeto representa un producto con 'producto' y 'precio'.
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

// Sección de ejemplo con el método 'forEach' para comparar con 'reduce'.
// Inicialización de la variable 'total' a 0.
let total = 0;
// Uso de 'forEach' para iterar sobre cada producto en 'carrito' y sumar sus precios al total.
carrito.forEach(producto => total += producto.precio);
// Impresión del total calculado con 'forEach'.
console.log(total);

// Uso del método 'reduce' para obtener el mismo resultado que con 'forEach'.
// 'reduce' toma una función reductora y un valor inicial (en este caso, 0).
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
/* La función reductora se aplica a cada elemento del array.
'total' es el acumulador, y 'producto.precio' se suma a este acumulador.
El resultado de 'reduce' se asigna a 'resultado'. */

console.log(resultado); // Impresión del resultado de 'reduce'.
