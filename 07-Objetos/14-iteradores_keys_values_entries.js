// Uso de iteradores de objetos en JavaScript

// Declaración de un objeto 'producto'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

// Object.keys: Devuelve un arreglo con las claves (keys) del objeto.
// 'Object.keys(producto)' crea un arreglo con todas las claves (nombres de las propiedades) del objeto 'producto'.
console.log(Object.keys(producto)); // ['nombre', 'precio', 'disponible']

// Object.values: Devuelve un arreglo con los valores de las propiedades del objeto.
// 'Object.values(producto)' crea un arreglo con todos los valores de las propiedades del objeto 'producto'.
console.log(Object.values(producto)); // ['Monitor 20 pulgadas', 30, true]

// Object.entries: Devuelve una matriz de pares clave-valor.
// 'Object.entries(producto)' crea una matriz (arreglo de arreglos) donde cada elemento es un par [clave, valor] del objeto 'producto'.
console.log(Object.entries(producto)); // [['nombre', 'Monitor 20 pulgadas'], ['precio', 30], ['disponible', true]]
