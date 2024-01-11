// Introducción a los objetos en JavaScript.

// Declaración de variables individuales.
// Estas variables almacenan información sobre un producto, pero de manera independiente.
const nombreProducto = "Monitor 20 Pulgadas"; // Variable para el nombre del producto.
const precio = 300; // Variable para el precio.
const disponible = true; // Variable para la disponibilidad.

// Declaración de un objeto.
// Un objeto en JavaScript permite agrupar varias propiedades relacionadas en una sola entidad.
const producto = {
    // Las propiedades del objeto se declaran dentro de llaves {}.
    nombre: "Monitor 20 Pulgadas", // 'nombre' es una propiedad del objeto 'producto'.
    precio: 300, // 'precio' es otra propiedad.
    disponible: true, // 'disponible' es otra propiedad.
    // Cada propiedad tiene un nombre (clave), seguido de ':' y luego su valor.
    // Las comas ',' se utilizan para separar las propiedades.
};

console.log(producto); // Muestra el objeto 'producto' con todas sus propiedades en la consola.

// Crear un objeto usando 'new Object()'.
// Este es otro método para crear objetos en JavaScript, aunque es menos común que el literal de objeto.
const producto2 = new Object();

// Añadir propiedades a este objeto.
// Las propiedades se pueden añadir al objeto después de su creación.
producto2.nombre = "Monitor 20 pulgadas"; // Añade la propiedad 'nombre'.
producto2.precio = 300; // Añade la propiedad 'precio'.
producto2.disponible = true; // Añade la propiedad 'disponible'.

console.log(producto2); // Muestra el objeto 'producto2' con todas sus propiedades en la consola.