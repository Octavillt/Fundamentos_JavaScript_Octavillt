// Desestructuración de objetos en JavaScript.

// Declaración de un objeto 'producto'.
// Este objeto contiene tres propiedades: 'nombre', 'precio' y 'disponible'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre' con su valor.
    precio: 30, // Propiedad 'precio' con su valor.
    disponible: true, // Propiedad 'disponible' con su valor.
};

/*
Acceso a propiedades de forma tradicional.
Antes de la desestructuración, se accedía a las propiedades de un objeto de esta manera:
Asigna el valor de 'producto.nombre' a la variable 'nombre'.
*/
// Este método es más verboso y requiere escribir más código.
// const nombre = producto.nombre; 
// console.log(nombre); // Monitor 20 pulgadas

/*Desestructuración de objetos.
La desestructuración permite extraer propiedades directamente en variables de una manera más concisa y legible.
Desestructuración de múltiples propiedades.*/

// Extrae la propiedad 'nombre' del objeto 'producto' y la asigna a una variable del mismo nombre.
// const { nombre } = producto;
// Muestra el valor de 'nombre'.
// console.log(nombre); // Monitor 20 pulgadas

// Extrae la propiedad 'precio'.
// const { precio } = producto; 
// Muestra el valor de 'precio'.
// console.log(precio); // 30

/*
Desestructuración en una sola línea.
Puedes extraer varias propiedades a la vez, lo que hace que el código sea aún más eficiente y claro.
Esta línea extrae 'nombre' y 'precio' de 'producto' y los asigna a las variables correspondientes.
La desestructuración en una sola línea es útil para extraer múltiples propiedades y asignarlas a variables con el mismo nombre de las propiedades.
*/
const { nombre, precio } = producto;
console.log(producto); // { nombre: 'Monitor 20 pulgadas', precio: 30, disponible: true }


