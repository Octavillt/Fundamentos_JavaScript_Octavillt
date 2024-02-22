// Utiliza el modo estricto para JavaScript.
// El modo estricto ayuda a capturar errores comunes y comportamientos "inseguros", como la asignación a variables no declaradas.
"use strict";

// Prevenir modificaciones en un objeto con 'Object.freeze'.

// Creación de un objeto 'producto'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

// Muestra el objeto 'producto' en su estado original.
console.log(producto); //{ nombre: 'Monitor 20 pulgadas', precio: 30, disponible: true }

// Congelar el objeto 'producto' para prevenir modificaciones.
// 'Object.freeze()' toma como argumento el objeto y lo congela.
Object.freeze(producto);
// Después de esta llamada, 'producto' no puede ser modificado.

// Intento de modificar el objeto congelado.
// Esta línea no tendrá efecto ya que 'producto' está congelado.
// producto.disponible = false;
// Cualquier intento de modificar un objeto congelado fallará silenciosamente en modo estricto.

// Intento de añadir una nueva propiedad.
// También fallará, no se pueden añadir nuevas propiedades a un objeto congelado.
// producto.imagen = "imagen.jpg"; 

// Intento de eliminar una propiedad.
// La eliminación de propiedades también está bloqueada en un objeto congelado.
// delete producto.nombre; 

// Verificación de si un objeto está congelado.
// Muestra 'true', indicando que el objeto 'producto' está congelado.
console.log(Object.isFrozen(producto)); // true

// Muestra el objeto 'producto' después de los intentos de modificación.
// A pesar de los intentos, el objeto 'producto' permanece sin cambios debido a que está congelado.
console.log(producto); // { nombre: 'Monitor 20 pulgadas', precio: 30, disponible: true }