// Uso de iteradores de objetos en JavaScript

const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

// Object.keys: Devuelve un arreglo con las claves (keys) del objeto.
console.log(Object.keys(producto)); // Muestra ['nombre', 'precio', 'disponible'].

// Object.values: Devuelve un arreglo con los valores de las propiedades del objeto.
console.log(Object.values(producto)); // Muestra ['Monitor 20 pulgadas', 30, true].

// Object.entries: Devuelve una matriz de pares clave-valor.
console.log(Object.entries(producto)); // Muestra [['nombre', 'Monitor 20 pulgadas'], ['precio', 30], ['disponible', true]].
