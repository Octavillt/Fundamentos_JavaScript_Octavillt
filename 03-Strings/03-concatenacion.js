// Concatenar o Unir 2 Textos o Variables:
const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Uso de .concat para unir cadenas
console.log(producto.concat(' En Descuento')); // Monitor 20 Pulgadas En Descuento
/* .concat(' En Descuento') une el texto ' En Descuento' al final de 'producto'. 
   Resultado: 'Monitor 20 Pulgadas En Descuento' */

console.log(producto.concat(precio));  // Monitor 20 Pulgadas30 USD
/* .concat(precio) une el contenido de la variable 'precio' al final de 'producto'. 
   Resultado: 'Monitor 20 Pulgadas30 USD' */

// Otras formas de Concatenar:
console.log(producto + precio); // Monitor 20 Pulgadas30 USD
// Uso del operador + para unir 'producto' y 'precio'. Resultado: 'Monitor 20 Pulgadas30 USD'

console.log(producto + " con un precio de " + precio); // Monitor 20 Pulgadas con un precio de 30 USD
/* Concatenación manual con el operador + y strings adicionales. 
   Resultado: 'Monitor 20 Pulgadas con un precio de 30 USD' */

console.log("El Producto " + producto + " tiene un precio de " + precio); // El Producto Monitor 20 Pulgadas tiene un precio de 30 USD
/* Una forma más compleja de concatenar, combinando textos y variables. 
   Resultado: 'El Producto Monitor 20 Pulgadas tiene un precio de 30 USD' */

console.log("El Producto", producto, "tiene un precio de", precio); // El Producto Monitor 20 Pulgadas tiene un precio de 30 USD 
/* Uso de comas para concatenar en console.log. Esto inserta espacios automáticamente entre los elementos.
   Resultado: 'El Producto Monitor 20 Pulgadas tiene un precio de 30 USD' */

// ES6 trajo consigo una mejor forma de Concatenar Variables: Template Strings
console.log(`El Producto ${producto} tiene un precio de ${precio}`); // El Producto Monitor 20 Pulgadas tiene un precio de 30 USD
/* Uso de Template Strings (backticks y ${}) para una concatenación más clara y fácil.
   Resultado: 'El Producto Monitor 20 Pulgadas tiene un precio de 30 USD' */
