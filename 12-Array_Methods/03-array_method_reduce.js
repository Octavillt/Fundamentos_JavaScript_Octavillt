/*
El método reduce() se utiliza para aplicar una función a un acumulador y a cada valor de un array
(de izquierda a derecha) para reducirlo a un solo valor.

Caso de uso:

// Tenemos un array de números
let array = [1, 2, 3, 4, 5];

// Queremos sumar todos los números en el array
let suma = array.reduce((acumulador, numero) => acumulador + numero, 0);

// Esto imprimirá '15' porque la suma de todos los números en el array es 15
console.log(suma); // 15

En este ejemplo, la función que pasamos a reduce() es una función de flecha que toma un acumulador y un número,
y devuelve la suma del acumulador y el número. reduce() pasa el valor acumulado y cada número del array a esta función,
acumulando el resultado. El segundo argumento para reduce() es el valor inicial del acumulador, en este caso 0. Al final,
reduce() devuelve el valor acumulado, que es la suma de todos los números en el array.
*/

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
console.log(total); // 3350

/*
La función reductora se aplica a cada elemento del array.
'total' es el acumulador, y 'producto.precio' se suma a este acumulador.
El resultado de 'reduce' se asigna a 'resultado'.
Uso del método 'reduce' para obtener el mismo resultado que con 'forEach'.
'reduce' toma una función reductora y un valor inicial (en este caso, 0).
*/
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
// Impresión del resultado de 'reduce'.
console.log(resultado); // 3350
