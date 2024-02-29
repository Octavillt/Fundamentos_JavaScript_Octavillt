// Se declara un array 'meses' con nombres de meses.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Se declara un array 'carrito' que contiene objetos con productos y sus precios.
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

console.log(meses); // [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ]

// Uso del operador de propagación (spread) para agregar 'Julio' al final del array 'meses'.
const meses2 = [...meses, 'Julio'];
// Muestra 'meses' con 'Julio' añadido al final.
console.log(meses2); // [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio' ]

// Uso del operador de propagación para agregar 'Julio' al inicio del array 'meses'.
const meses3 = ['Julio', ...meses];
// Muestra 'meses' con 'Julio' añadido al inicio.
console.log(meses3); // [ 'Julio', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ]

// Se declara un objeto 'producto'.
const producto = { producto: 'SSD', precio: 693 };
// Muestra el objeto 'producto' en consola.
console.log(producto); // { producto: 'SSD', precio: 693 }

// Uso del operador de propagación para agregar el objeto 'producto' al final del array 'carrito'.
const carrito2 = [...carrito, producto];
// Muestra 'carrito' con 'producto' añadido al final.
console.log(carrito2); /*
[
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },
    { producto: 'SSD', precio: 693 }
]
*/

// Uso del operador de propagación para agregar el objeto 'producto' al inicio del array 'carrito'.
const carrito3 = [producto, ...carrito];
// Muestra 'carrito' con 'producto' añadido al inicio.
console.log(carrito3); /*
[
    { producto: 'SSD', precio: 693 },
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 }
]
*/

