// Declaración de Strings en JavaScript

// Creación de una Cadena Primitiva
const producto = 'Monitor 20 Pulgadas'; // Usamos comillas sencillas para crear una cadena primitiva.
// console.log(producto); // Muestra 'Monitor 20 Pulgadas' en la consola.

// Otra manera de Crear Strings
const producto2 = String('Monitor 24 Pulgadas'); // Usamos el constructor String para crear otra cadena primitiva.
// console.log(producto2); // Muestra 'Monitor 24 Pulgadas' en la consola.

// Crear un Objeto String (menos común)
const producto3 = new String('Monitor 30 Pulgadas'); // Usamos 'new String' para crear un objeto String, no una cadena primitiva.
// console.log(producto3); // Muestra el objeto String en la consola.

// Reglas para crear Strings
const producto4 = 'Monitor 20 Pulgadas'; // Uso de comillas sencillas para strings.
const producto5 = "Monitor 20 Pulgadas"; // Uso de comillas dobles para strings.

// Importante: No Mezclar Comillas
// const producto6 = "Monitor 20 Pulgadas'; // Error: Mezclar comillas sencillas y dobles provoca un error de sintaxis.

// Escapar Caracteres en Strings
const producto6 = "Monitor 24\""; // Uso de la barra invertida (\) para escapar comillas dobles dentro de un string con comillas dobles.
console.log(producto4); // Muestra 'Monitor 20 Pulgadas' en la consola.
