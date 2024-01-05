// Introducción a los objetos en JavaScript

// Declaración de variables individuales
const nombreProducto = "Monitor 20 Pulgadas"; // Variable para el nombre del producto
const precio = 300; // Variable para el precio
const disponible = true; // Variable para la disponibilidad

// Declaración de un objeto

// Un objeto en JavaScript permite agrupar propiedades relacionadas.
const producto = {
    // Las propiedades del objeto se declaran dentro de las llaves.
    nombre: "Monitor 20 Pulgadas", // 'nombre' es una propiedad del objeto 'producto'.
    precio: 300, // 'precio' es otra propiedad.
    disponible: true, // 'disponible' es otra propiedad.
    // Nota: Cada propiedad tiene un nombre seguido de ':' y luego su valor.
    // Las comas (,) se utilizan para separar las propiedades.
};

console.log(producto); // Muestra el objeto 'producto' con todas sus propiedades.

// Crear un objeto usando 'new Object()'
const producto2 = new Object();

// Añadir propiedades a este objeto
producto2.nombre = "Monitor 20 pulgadas";
producto2.precio = 300;
producto2.disponible = true;