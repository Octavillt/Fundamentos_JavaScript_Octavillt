/*
El método every() se utiliza para comprobar si todos los elementos de un array cumplen con la condición implementada
por la función proporcionada. Devuelve true si todos los elementos cumplen la condición, de lo contrario devuelve false.

Caso de uso:
// Tenemos un array de números
let array = [1, 2, 3, 4, 5];

// Queremos comprobar si todos los números en el array son menores que 10
let resultado = array.every(numero => numero < 10);

// Esto imprimirá 'true' porque todos los números en el array son menores que 10
console.log(resultado); // true

En este ejemplo, la función que pasamos a every() es una función de flecha que toma un número y devuelve true
si el número es menor que 10. every() pasa cada número del array a esta función y si alguna vez devuelve false,
every() también devuelve false. Si la función siempre devuelve true (es decir, si todos los números en el array son
menores que 10), entonces every() devuelve true.
*/

// Se declara una constante 'carrito', que es un array de objetos, donde cada objeto representa un producto con propiedades 'nombre' y 'precio'.
const carrito = [
    // Aquí se listan varios productos con sus respectivos precios.
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// Se declara una variable 'cumple' inicializada en true. Esta variable se usará para verificar una condición en cada elemento del array.
let cumple = true;

// Se utiliza el método 'forEach' para iterar sobre cada elemento del array 'carrito'.
carrito.forEach(producto => {
    // Se verifica si el precio del producto es mayor a 700. Si es así, se cambia el valor de 'cumple' a false y se sale del bucle.
    if (producto.precio > 700) {
        cumple = false;
        return;
    }
});
// Se imprime en consola el valor de 'cumple', que indica si todos los productos tienen un precio menor o igual a 700.
console.log(cumple); // false
// Se declara una variable 'resultado' para almacenar el resultado de la verificación con 'every'.
let resultado;

// Se usa el método 'every' para verificar si todos los productos en el carrito tienen un precio menor a 700.
resultado = carrito.every(producto => producto.precio < 700);
// Se imprime en consola el resultado de la verificación con 'every'.
console.log(resultado); // false

// Se usa de nuevo 'every' para verificar si todos los productos tienen un precio menor a 1000.
resultado = carrito.every(producto => producto.precio < 1000);
// Se imprime en consola el resultado de la última verificación.
console.log(resultado); // true


