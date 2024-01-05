// Comportamiento de los objetos declarados con 'const'

const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true // Propiedad 'disponible' inicialmente establecida en 'true'.
};

console.log(producto); // Muestra el objeto 'producto' en su estado inicial en la consola.

// Modificación de una propiedad del objeto
producto.disponible = false; // Cambia el valor de la propiedad 'disponible' a 'false'.

console.log(producto); // Muestra el objeto 'producto' después de la modificación.
// A pesar de ser declarado con 'const', las propiedades del objeto 'producto' pueden ser modificadas.
