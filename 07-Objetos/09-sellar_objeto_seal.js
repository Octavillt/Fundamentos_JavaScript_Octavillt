"use strict";
// Utiliza el modo estricto para JavaScript.
// El modo estricto ayuda a evitar errores comunes y comportamientos inseguros en JavaScript.

// Utilización de 'Object.seal' para sellar objetos en JavaScript.

// Creación de un objeto 'producto'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

// Sellar el objeto 'producto'.
Object.seal(producto); // 'Object.seal()' sella el objeto, impidiendo añadir o eliminar propiedades.
// Después de sellar el objeto, no se pueden agregar nuevas propiedades ni eliminar las existentes.
// Sin embargo, las propiedades existentes pueden ser modificadas.

// Modificar una propiedad existente en un objeto sellado.
producto.nombre = 'Tablet'; // Cambia el valor de 'nombre' a 'Tablet'.
// Esta modificación es permitida en un objeto sellado.

// Intento de eliminar una propiedad.
// delete producto.precio; // Esta línea no tendrá efecto, ya que las propiedades no pueden ser eliminadas en un objeto sellado.
// Intentar eliminar una propiedad de un objeto sellado no surtirá efecto.

// Intento de añadir una nueva propiedad.
// producto.imagen = "imagen.jpg"; // También fallará, no se pueden añadir nuevas propiedades a un objeto sellado.
// Intentar añadir una propiedad a un objeto sellado no es posible.

// Verificar si un objeto está sellado.
console.log(Object.isSealed(producto)); // Muestra 'true', indicando que el objeto 'producto' está sellado.
// 'Object.isSealed()' comprueba si un objeto ha sido sellado.

console.log(producto); // Muestra el objeto 'producto' después de los intentos de modificación.
// El objeto 'producto' muestra las modificaciones realizadas a sus propiedades existentes, pero no refleja intentos fallidos de añadir o eliminar propiedades.
