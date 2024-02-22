// Acceso a propiedades de un objeto en JavaScript.

// Declaración de un objeto 'producto'.
// El objeto 'producto' contiene tres propiedades: 'nombre', 'precio' y 'disponible'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true, // Propiedad 'disponible' con su valor.
    // Nota: Es importante usar comas para separar las propiedades.
};

// Muestra en consola todo el objeto 'producto'.
console.log(producto); // { nombre: 'Monitor 20 pulgadas', precio: 30, disponible: true }

/*
Esta línea imprime todas las propiedades y sus valores del objeto 'producto'.
Acceso a propiedades utilizando la sintaxis de punto.
Esta es una forma común y directa de acceder a los valores de las propiedades de un objeto.*
*/

// Muestra el valor de la propiedad 'nombre'.
console.log(producto.nombre); // Monitor 20 pulgadas
// Muestra el valor de la propiedad 'precio'.
console.log(producto.precio); // 30
// Muestra el valor de la propiedad 'disponible'.
console.log(producto.disponible); // true

/*
La sintaxis de punto es simple y directa, pero el nombre de la propiedad debe ser conocido y válido como identificador.
Acceso a propiedades utilizando la sintaxis de corchetes.
Esta sintaxis es útil en ciertos escenarios, especialmente cuando el nombre de la propiedad es dinámico o no es un identificador válido.
*/

// Muestra el valor de la propiedad 'nombre'.
console.log(producto['nombre']); // Monitor 20 pulgadas
// La sintaxis de corchetes es versátil y permite usar variables para los nombres de las propiedades.
// Es especialmente útil cuando el nombre de la propiedad está en una variable o es una cadena con espacios o caracteres especiales.
