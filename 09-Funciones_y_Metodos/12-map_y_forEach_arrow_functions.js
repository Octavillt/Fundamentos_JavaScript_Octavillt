// ForEach y Map con Arrow Functions

// Declaración de un arreglo de objetos 'carrito'.
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

/*
// Ejemplo sin uso del Arrow Functions

const nuevoArray = carrito.map(function(producto) {
    return `Articulo: ${producto.nombre} Precio: $ ${producto.precio}`;
});
const nuevoArray2 = carrito.forEach(function(producto) {
    return `Articulo: ${producto.nombre} Precio: $ ${producto.precio}`;
});
*/

// Nota sobre Arrow Functions: 
// Las funciones flecha en una sola línea retornan implícitamente el valor sin necesidad de 'return'.

/*
Uso de 'map' con una función flecha para crear un nuevo arreglo.
'map' recorre cada elemento del arreglo 'carrito' y retorna un nuevo arreglo.
La función flecha devuelve un string con el nombre y precio de cada producto.
*/
const nuevoArray = carrito.map(producto => `Articulo: ${producto.nombre} Precio: $ ${producto.precio}`);

// Imprime el nuevo arreglo creado por 'map'.
// Este arreglo contiene strings con los detalles de cada producto.
console.log(nuevoArray); /*
[
'Articulo: Monitor 20 Pulgadas Precio: $ 500',
'Articulo: Televisión 50 Pulgadas Precio: $ 700',
'Articulo: Tablet  Precio: $ 300',
'Articulo: Audifonos Precio: $ 200',
'Articulo: Teclado Precio: $ 50',
'Articulo: Celular Precio: $ 500'
]
*/

/*
Uso de 'forEach' con una función flecha para imprimir cada elemento del arreglo.
'forEach' recorre cada elemento del arreglo 'carrito'.
La función flecha imprime el nombre y precio de cada producto.
*/
carrito.forEach(producto => console.log(`Articulo: ${producto.nombre} Precio: $ ${producto.precio}`)); /*
Articulo: Monitor 20 Pulgadas Precio: $ 500
Articulo: Televisión 50 Pulgadas Precio: $ 700
Articulo: Tablet  Precio: $ 300
Articulo: Audifonos Precio: $ 200
Articulo: Teclado Precio: $ 50
Articulo: Celular Precio: $ 500
*/