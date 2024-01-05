"use strict";

// Prevenir modificaciones en un objeto con 'Object.freeze'

const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

console.log(producto); // Muestra el objeto 'producto' en su estado original.

// Congelar el objeto 'producto' para prevenir modificaciones
Object.freeze(producto); // 'Object.freeze()' toma como argumento el objeto y lo congela.

// Intento de modificar el objeto congelado
// producto.disponible = false; // Esta línea no tendrá efecto ya que 'producto' está congelado.

// Intento de añadir una nueva propiedad
// producto.imagen = "imagen.jpg"; // También fallará, no se pueden añadir nuevas propiedades a un objeto congelado.

// Intento de eliminar una propiedad
// delete producto.nombre; // La eliminación de propiedades también está bloqueada en un objeto congelado.

// Verificación de si un objeto está congelado
console.log(Object.isFrozen(producto)); // Muestra 'true', indicando que el objeto 'producto' está congelado.

console.log(producto); // Muestra el objeto 'producto' después de los intentos de modificación.
