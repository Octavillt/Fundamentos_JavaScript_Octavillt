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
console.log(resultado); // Muestra el producto 'Laptop' en la consola.

// Ejemplo usando el método '.find'.
// 'find' devuelve el primer elemento del array que cumple con la condición especificada.
const resultado2 = carrito.find(producto => producto.nombre === 'Audifonos');
console.log(resultado2); // Muestra el producto 'Audifonos' en la consola.

// Comentario adicional sobre '.find'.
// Si hay múltiples elementos que cumplen con la condición, '.find' solo devuelve el primero.
const resultado3 = carrito.find(producto => producto.precio === 500);
console.log(resultado3); // Muestra el primer producto con precio 500 en la consola.
