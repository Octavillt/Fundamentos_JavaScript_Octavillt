// Métodos existentes en los Strings o Cadenas de Texto:
const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Uso de length para obtener la longitud de una cadena
console.log(producto.length); // 19
/* El método .length devuelve la longitud de la cadena 'producto', que es 18 caracteres. 
   Nota: .length es una propiedad y no un método, por eso no lleva paréntesis. */

// Uso de indexOf
console.log(producto.indexOf("Pulgadas")) // 11
/* .indexOf("Pulgadas") devuelve la posición inicial de la subcadena "Pulgadas" en 'producto', 
   que es 11. Si la subcadena no se encuentra, devuelve -1. */

console.log(producto.indexOf('Tablet')); // -1
// Devuelve -1 porque la subcadena 'Tablet' no está presente en 'producto'.

// Uso de includes
// Devuelve un booleano
console.log(producto.includes('Monitor')); // true
/* .includes('Monitor') verifica si 'Monitor' está en la cadena 'producto'. 
   Devuelve true porque 'Monitor' es parte de 'producto'. */

console.log(producto.includes('monitor')); // false
/* .includes('monitor') también verifica la presencia de 'monitor' en 'producto', 
   pero devuelve false debido a la diferencia en mayúsculas y minúsculas. */
