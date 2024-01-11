// Uso de iteradores de objetos en JavaScript

// Declaración de un objeto 'producto'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

// Object.keys: Devuelve un arreglo con las claves (keys) del objeto.
console.log(Object.keys(producto)); // Muestra ['nombre', 'precio', 'disponible'].
// 'Object.keys(producto)' crea un arreglo con todas las claves (nombres de las propiedades) del objeto 'producto'.

// Object.values: Devuelve un arreglo con los valores de las propiedades del objeto.
console.log(Object.values(producto)); // Muestra ['Monitor 20 pulgadas', 30, true].
// 'Object.values(producto)' crea un arreglo con todos los valores de las propiedades del objeto 'producto'.

// Object.entries: Devuelve una matriz de pares clave-valor.
console.log(Object.entries(producto)); // Muestra [['nombre', 'Monitor 20 pulgadas'], ['precio', 30], ['disponible', true]].
// 'Object.entries(producto)' crea una matriz (arreglo de arreglos) donde cada elemento es un par [clave, valor] del objeto 'producto'.
