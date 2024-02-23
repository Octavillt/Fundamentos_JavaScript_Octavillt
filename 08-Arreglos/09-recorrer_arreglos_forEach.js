// Notas sobre 'forEach':
/*
'forEach' también permite acceder al índice y al arreglo completo, además del elemento actual, si es necesario.
Ejemplo: carrito.forEach(function(producto, indice, arreglo) { ... });
Uso del método 'forEach' para recorrer arreglos en JavaScript.
'forEach' es un método de los arreglos que permite ejecutar una función en cada elemento del arreglo.
*/

// Declaración de un arreglo 'carrito' que contiene varios objetos.
// Cada objeto representa un producto con un 'nombre' y un 'precio'.
const carrito = [
    { nombre: 'Monitor 32 Pulgadas', precio: 963 },
    { nombre: 'Televisión 50 Pulgadas', precio: 9633 },
    { nombre: 'Tablet', precio: 333 },
    { nombre: 'Audifonos', precio: 369 },
    { nombre: 'Teclado', precio: 33 },
    { nombre: 'Celular', precio: 396 }
];

// Recorrido del arreglo 'carrito' utilizando un bucle 'for'.
// Este es un enfoque clásico y más imperativo para recorrer arreglos.
for (let i = 0; i < carrito.length; i++) {
    // Imprime el nombre y precio de cada producto en 'carrito'.
    console.log(`Articulo: ${carrito[i].nombre} - Precio: $ ${carrito[i].precio}`); /*
    Articulo: Monitor 32 Pulgadas - Precio: $ 963
    Articulo: Televisión 50 Pulgadas - Precio: $ 9633
    Articulo: Tablet - Precio: $ 333
    Articulo: Audifonos - Precio: $ 369
    Articulo: Teclado - Precio: $ 33
    Articulo: Celular - Precio: $ 396
    */
}

// Recorrido del arreglo 'carrito' utilizando 'forEach'.
// 'forEach' es un enfoque más declarativo y moderno.
carrito.forEach(function (producto) {
    // La función dentro de 'forEach' se llama para cada elemento del arreglo.
    // 'producto' representa el elemento actual del arreglo durante cada iteración.
    console.log(`Articulo: ${producto.nombre} - Precio: $ ${producto.precio}`); /*
    Articulo: Monitor 32 Pulgadas - Precio: $ 963
    Articulo: Televisión 50 Pulgadas - Precio: $ 9633
    Articulo: Tablet - Precio: $ 333
    Articulo: Audifonos - Precio: $ 369
    Articulo: Teclado - Precio: $ 33
    Articulo: Celular - Precio: $ 396
    */
});

// Comparación entre 'for' y 'forEach':
/*
1. 'for' es un bucle más general que puede usarse para una amplia gama de iteraciones, no solo arreglos.
2. 'forEach' es específico para arreglos y proporciona un enfoque más claro y conciso para iterar sobre ellos.
3. 'forEach' es preferido en muchas situaciones debido a su simplicidad y legibilidad.
4. En 'forEach', no es necesario manejar un índice o una condición de parada como en 'for'.
*/