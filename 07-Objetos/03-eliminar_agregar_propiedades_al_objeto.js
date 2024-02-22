// Manipulación de propiedades en objetos de JavaScript.

// Declaración de un objeto 'producto'.
// El objeto 'producto' contiene tres propiedades: 'nombre', 'precio' y 'disponible'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true, // Propiedad 'disponible' con su valor.
    // Nota: La coma (,) después de cada propiedad es importante para separarlas.
};

// Añadir/agregar propiedades al objeto.

// Se puede añadir nuevas propiedades al objeto usando la sintaxis de punto.
producto.imagen = "image.jpg"; // Añade la propiedad 'imagen' al objeto 'producto'.
// Esto es útil para expandir o modificar la estructura de un objeto en tiempo de ejecución.

// Muestra el objeto 'producto' después de agregar un elemento.
console.log(producto);  // { nombre: 'Monitor 20 pulgadas', precio: 30, disponible: true, imagen: 'image.jpg' }

// Eliminar propiedades del objeto.

// Para eliminar una propiedad, se utiliza la palabra clave 'delete'.
delete producto.nombre; // Elimina la propiedad 'nombre' del objeto 'producto'.
// Esta operación elimina la propiedad y su valor del objeto, reduciendo su tamaño y complejidad.

// Muestra el objeto 'producto' después de eliminar un elemento.
console.log(producto); // { precio: 30, disponible: true, imagen: 'image.jpg' }
// El objeto 'producto' ahora solo contiene 'precio', 'disponible' e 'imagen'.
