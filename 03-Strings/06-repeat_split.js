// Repeat
const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
// .repeat(3) repite la cadena 'en Promoción ' tres veces. Resultado: 'en Promoción en Promoción en Promoción '.

// Repite 'producto' tres veces. Resultado: 'Monitor 24 pulgadas Monitor 24 pulgadas Monitor 24 pulgadas '.
console.log(producto.repeat(3)); // Monitor 24 pulgadas Monitor 24 pulgadas Monitor 24 pulgadas

// .repeat(2.2) redondea el número a 2 y repite 'producto' dos veces. Resultado: 'Monitor 24 pulgadas Monitor 24 pulgadas '.
// va a Redondear a Entero -> 2
console.log(producto.repeat(2.2)); // Monitor 24 pulgadas Monitor 24 pulgadas

// Concatenación usando Template Strings y .repeat(). Resultado: 'Monitor 24 pulgadas en Promoción en Promoción en Promoción  !!!'.
console.log(`${producto} ${texto} !!!`); // Monitor 24 pulgadas en Promoción en Promoción en Promoción  !!!

// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" ")); // ["Estoy", "aprendiendo", "Javascript", "Moderno"]
// .split(" ") divide 'actividad' en un array de palabras, utilizando el espacio como separador.

const hobbies = 'Leer, Caminar, Escuchar Musica, Escribir, Aprender a Programar';
console.log(hobbies.split(", ")); // ["Leer", "Caminar", "Escuchar Musica", "Escribir", "Aprender a Programar"]
// .split(", ") divide 'hobbies' en un array de elementos, utilizando la coma y espacio como separadores.

const tweet = "Aprendiendo JavaScript Moderno #JSModernoConOctavio";
console.log(tweet.split('#')); // ["Aprendiendo JavaScript Moderno ", "JSModernoConOctavio"]
// .split('#') divide 'tweet' en un array, utilizando el hashtag como separador.
