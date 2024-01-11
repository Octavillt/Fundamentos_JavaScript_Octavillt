"use strict";
// Utiliza el modo estricto para JavaScript.
// El modo estricto ayuda a capturar errores comunes y comportamientos "inseguros", como la asignación a variables no declaradas.

// Prevenir modificaciones en un objeto con 'Object.freeze'.

// Creación de un objeto 'producto'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

console.log(producto); // Muestra el objeto 'producto' en su estado original.

// Congelar el objeto 'producto' para prevenir modificaciones.
Object.freeze(producto); // 'Object.freeze()' toma como argumento el objeto y lo congela.
// Después de esta llamada, 'producto' no puede ser modificado.

// Intento de modificar el objeto congelado.
// producto.disponible = false; // Esta línea no tendrá efecto ya que 'producto' está congelado.
// Cualquier intento de modificar un objeto congelado fallará silenciosamente en modo estricto.

// Intento de añadir una nueva propiedad.
// producto.imagen = "imagen.jpg"; // También fallará, no se pueden añadir nuevas propiedades a un objeto congelado.

// Intento de eliminar una propiedad.
// delete producto.nombre; // La eliminación de propiedades también está bloqueada en un objeto congelado.

// Verificación de si un objeto está congelado.
console.log(Object.isFrozen(producto)); // Muestra 'true', indicando que el objeto 'producto' está congelado.

console.log(producto); // Muestra el objeto 'producto' después de los intentos de modificación.
// A pesar de los intentos, el objeto 'producto' permanece sin cambios debido a que está congelado.
