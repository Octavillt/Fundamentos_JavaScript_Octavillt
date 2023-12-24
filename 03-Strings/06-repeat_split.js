// Repeat
const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
// .repeat(3) repite la cadena 'en Promoción ' tres veces. Resultado: 'en Promoción en Promoción en Promoción '.

console.log(producto.repeat(3));
// Repite 'producto' tres veces. Resultado: 'Monitor 24 pulgadas Monitor 24 pulgadas Monitor 24 pulgadas '.

console.log(producto.repeat(2.2)); // va a Redondear a Entero -> 2
// .repeat(2.2) redondea el número a 2 y repite 'producto' dos veces. Resultado: 'Monitor 24 pulgadas Monitor 24 pulgadas '.

console.log(`${producto} ${texto} !!!`);
// Concatenación usando Template Strings y .repeat(). Resultado: 'Monitor 24 pulgadas en Promoción en Promoción en Promoción  !!!'.

// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));
// .split(" ") divide 'actividad' en un array de palabras, utilizando el espacio como separador.

const hobbies = 'Leer, Caminar, Escuchar Musica, Escribir, Aprender a Programar';
console.log(hobbies.split(", "));
// .split(", ") divide 'hobbies' en un array de elementos, utilizando la coma y espacio como separadores.

const tweet = "Aprendiendo JavaScript Moderno #JSModernoConOctavio";
console.log(tweet.split('#'));
// .split('#') divide 'tweet' en un array, utilizando el hashtag como separador.
