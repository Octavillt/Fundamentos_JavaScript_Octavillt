"use strict";

// Utilización de 'Object.seal' para sellar objetos en JavaScript

const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

// Sellar el objeto 'producto'
Object.seal(producto); // 'Object.seal()' sella el objeto, impidiendo añadir o eliminar propiedades.

// Modificar una propiedad existente en un objeto sellado
producto.nombre = 'Tablet'; // Cambia el valor de 'nombre' a 'Tablet'.

// Intento de eliminar una propiedad
// delete producto.precio; // Esta línea no tendrá efecto, ya que las propiedades no pueden ser eliminadas en un objeto sellado.

// Intento de añadir una nueva propiedad
// producto.imagen = "imagen.jpg"; // También fallará, no se pueden añadir nuevas propiedades a un objeto sellado.

// Verificar si un objeto está sellado
console.log(Object.isSealed(producto)); // Muestra 'true', indicando que el objeto 'producto' está sellado.

console.log(producto); // Muestra el objeto 'producto' después de los intentos de modificación.
