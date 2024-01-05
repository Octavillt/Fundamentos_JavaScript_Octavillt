// Manipulación de propiedades en objetos de JavaScript

// Declaración de un objeto 'producto'
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true, // Propiedad 'disponible' con su valor.
    // Nota: La coma (,) después de cada propiedad es importante para separarlas.
};

// Añadir propiedades al objeto
// Se puede añadir nuevas propiedades al objeto usando la sintaxis de punto.
producto.imagen = "image.jpg"; // Añade la propiedad 'imagen' al objeto 'producto'.

// Eliminar propiedades del objeto
// Para eliminar una propiedad, se utiliza la palabra clave 'delete'.
delete producto.nombre; // Elimina la propiedad 'nombre' del objeto 'producto'.

console.log(producto); // Muestra el objeto 'producto' después de la modificación.
