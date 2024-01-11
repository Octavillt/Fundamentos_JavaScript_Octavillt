// Copiar y combinar objetos con el Spread Operator en JavaScript.

// Declaración de dos objetos: 'producto' y 'medidas'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

const medidas = {
    peso: '1 kg', // Propiedad 'peso'.
    medida: '1 metro' // Propiedad 'medida'.
};

// Combinación de objetos usando el Spread Operator.

// El Spread Operator '...' permite 'esparcir' las propiedades de los objetos dentro de un nuevo objeto.
const resultado = { ...producto, ...medidas };
// Aquí, las propiedades de 'producto' y 'medidas' se combinan en un nuevo objeto 'resultado'.
// El Spread Operator toma todas las propiedades de 'producto' y 'medidas' y las coloca en el nuevo objeto 'resultado'.

console.log(resultado);
// Muestra el objeto 'resultado' que incluye las propiedades de ambos, 'producto' y 'medidas'.
// 'resultado' ahora contiene todas las propiedades de 'producto' y 'medidas', combinadas en un solo objeto.
