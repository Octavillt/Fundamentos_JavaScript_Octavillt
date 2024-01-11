// Desestructuración de objetos en JavaScript.

// Declaración de un objeto 'producto'.
// Este objeto contiene tres propiedades: 'nombre', 'precio' y 'disponible'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true, // Propiedad 'disponible' con su valor.
};

// Acceso a propiedades de forma tradicional.
// Antes de la desestructuración, se accedía a las propiedades de un objeto de esta manera:
// const nombre = producto.nombre; // Asigna el valor de 'producto.nombre' a la variable 'nombre'.
// Este método es más verboso y requiere escribir más código.

// Desestructuración de objetos.
// La desestructuración permite extraer propiedades directamente en variables de una manera más concisa y legible.
// Desestructuración de múltiples propiedades.
// const { nombre } = producto; // Extrae la propiedad 'nombre' del objeto 'producto' y la asigna a una variable del mismo nombre.
console.log(nombre); // Muestra el valor de 'nombre'.
// const { precio } = producto; // Extrae la propiedad 'precio'.
console.log(precio); // Muestra el valor de 'precio'.

// Desestructuración en una sola línea.
// Puedes extraer varias propiedades a la vez, lo que hace que el código sea aún más eficiente y claro.
const { nombre, precio } = producto;
// Esta línea extrae 'nombre' y 'precio' de 'producto' y los asigna a las variables correspondientes.
// La desestructuración en una sola línea es útil para extraer múltiples propiedades y asignarlas a variables con el mismo nombre de las propiedades.
