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
console.log(cumple);

// Se declara una variable 'resultado' para almacenar el resultado de la verificación con 'every'.
let resultado;

// Se usa el método 'every' para verificar si todos los productos en el carrito tienen un precio menor a 700.
resultado = carrito.every(producto => producto.precio < 700);
console.log(resultado); // Se imprime en consola el resultado de la verificación con 'every'.

// Se usa de nuevo 'every' para verificar si todos los productos tienen un precio menor a 1000.
resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado); // Se imprime en consola el resultado de la última verificación.


