// Comportamiento de los objetos declarados con 'const'.

// Declaración de un objeto 'producto' usando 'const'.
// Aunque se utiliza 'const', las propiedades del objeto aún pueden ser modificadas.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true // Propiedad 'disponible' inicialmente establecida en 'true'.
};

console.log(producto); // Muestra el objeto 'producto' en su estado inicial en la consola.
// En este punto, 'producto' tiene las propiedades 'nombre', 'precio' y 'disponible' establecidas.

// Modificación de una propiedad del objeto.
// Cambia el valor de la propiedad 'disponible' a 'false'.
producto.disponible = false;
// A pesar de que 'producto' fue declarado con 'const', podemos cambiar el valor de sus propiedades.
// Esto es posible porque 'const' asegura que la variable 'producto' siempre apunte al mismo objeto, pero no impide la modificación de las propiedades del objeto.

console.log(producto); // Muestra el objeto 'producto' después de la modificación.
// El objeto 'producto' ahora tiene la propiedad 'disponible' establecida en 'false'.
// Esto demuestra que las propiedades de un objeto declarado con 'const' pueden ser modificadas.
