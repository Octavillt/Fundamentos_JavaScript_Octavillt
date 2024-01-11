// Unión de objetos en JavaScript con 'Object.assign'

// Declaración de dos objetos separados
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

const medidas = {
    peso: '1 kg', // Propiedad 'peso'.
    medida: '1 metro' // Propiedad 'medida'.
};

// Unir 'producto' y 'medidas' en un nuevo objeto 'resultado'
// 'Object.assign' toma un objeto destino (aquí es un objeto vacío {}) y uno o más objetos fuente (producto, medidas).
const resultado = Object.assign({}, producto, medidas);
// En esta línea, se crea un nuevo objeto vacío {} y se le asignan las propiedades de 'producto' y 'medidas'.
// 'resultado' será un objeto que contiene las propiedades combinadas de ambos objetos.

console.log(resultado);
// Muestra en consola el objeto 'resultado', que incluye las propiedades combinadas de 'producto' y 'medidas'.
// El resultado es un objeto que tiene las propiedades 'nombre', 'precio', 'disponible', 'peso' y 'medida'.
