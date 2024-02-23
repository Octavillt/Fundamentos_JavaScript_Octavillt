// Notas sobre el método 'map' para recorrer arreglos en JavaScript.
/*
Uso del método 'map' para recorrer arreglos en JavaScript.
'map' es un método de los arreglos que crea un nuevo arreglo con los resultados de llamar a una función en cada elemento del arreglo original.
'map' es particularmente útil en programación funcional donde la inmutabilidad y las transformaciones de datos son comunes.
La inmutabilidad en 'map' permite trabajar de forma más predecible y evita efectos secundarios inesperados en los datos originales.
*/


// Declaración de un arreglo 'carrito' que contiene objetos.
// Cada objeto representa un producto con un 'nombre' y un 'precio'.
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 }
];

// Uso de 'map' para crear un nuevo arreglo basado en 'carrito'.
const nuevoArray = carrito.map(function (producto) {
    // Esta función se llama para cada elemento de 'carrito'.
    // Crea y retorna una nueva cadena de texto con el nombre y precio de cada producto.
    return `Articulo: ${producto.nombre} Precio: $ ${producto.precio}`;
});

// Uso de 'forEach' para comparación.
// 'forEach' no crea un nuevo arreglo, simplemente ejecuta una función en cada elemento del arreglo original.
const nuevoArray2 = carrito.forEach(function (producto) {
    // Aunque esta función es similar a la usada en 'map', no tiene efecto en 'nuevoArray2' porque 'forEach' no retorna un nuevo arreglo.
    return `Articulo: ${producto.nombre} Precio: $ ${producto.precio}`;
});

// Imprime el nuevo arreglo creado por 'map'.
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

// Imprime 'undefined', ya que 'forEach' no retorna un arreglo.
console.log(nuevoArray2); // undefined

// Comparación entre 'map' y 'forEach':
/*
1. 'map' es utilizado cuando se necesita transformar los elementos de un arreglo y obtener un nuevo arreglo con estas transformaciones.
2. 'forEach' se utiliza para ejecutar una función en cada elemento del arreglo, pero no para crear un nuevo arreglo.
3. 'map' es inmutable, lo que significa que no modifica el arreglo original.
4. 'forEach' puede modificar el arreglo original si se realizan cambios en los elementos dentro de la función proporcionada.
*/