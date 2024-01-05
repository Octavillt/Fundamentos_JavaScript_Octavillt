// Acceso a propiedades de un objeto en JavaScript

// Declaración de un objeto 'producto'
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true, // Propiedad 'disponible' con su valor.
    // Nota: Es importante usar comas para separar las propiedades.
};

console.log(producto); // Muestra en consola todo el objeto 'producto'.

// Acceso a propiedades utilizando la sintaxis de punto
console.log(producto.nombre); // Muestra el valor de la propiedad 'nombre'.
console.log(producto.precio); // Muestra el valor de la propiedad 'precio'.
console.log(producto.disponible); // Muestra el valor de la propiedad 'disponible'.
// La sintaxis de punto es la forma más común de acceder a propiedades.

// Acceso a propiedades utilizando la sintaxis de corchetes
console.log(producto['nombre']); // Muestra el valor de la propiedad 'nombre'.
// Esta forma es útil cuando el nombre de la propiedad está en una variable o es una cadena con espacios o caracteres especiales.
