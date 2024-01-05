// Desestructuración de objetos en JavaScript

// Declaración de un objeto 'producto'
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true, // Propiedad 'disponible' con su valor.
};

// Acceso a propiedades de forma tradicional
// const nombre = producto.nombre; // Asigna el valor de 'producto.nombre' a la variable 'nombre'.

// Desestructuración de objetos
// La desestructuración permite extraer propiedades directamente en variables.

// Desestructuración de múltiples propiedades
// const { nombre } = producto; // Extrae la propiedad 'nombre' del objeto 'producto' y la asigna a una variable del mismo nombre.
console.log(nombre); // Muestra el valor de 'nombre'.
// const { precio } = producto; // Extrae la propiedad 'precio'.
console.log(precio); // Muestra el valor de 'precio'.

// Desestructuración en una sola línea
// Puedes extraer varias propiedades a la vez.
const { nombre, precio } = producto;
// Esta línea extrae 'nombre' y 'precio' de 'producto' y los asigna a las variables correspondientes.
