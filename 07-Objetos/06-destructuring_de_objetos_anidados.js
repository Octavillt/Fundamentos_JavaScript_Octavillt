// Desestructuración de objetos anidados en JavaScript.

// Declaración de un objeto 'producto' con propiedades y objetos anidados.
const producto = {
    nombre: "Monitor 33 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true, // Propiedad 'disponible'.
    informacion: { // Objeto anidado 'informacion'.
        medidas: { // Objeto anidado 'medidas' dentro de 'informacion'.
            peso: '1kg', // Propiedad 'peso' en 'medidas'.
            medida: '1m' // Propiedad 'medida' en 'medidas'.
        },
        fabricacion: { // Objeto anidado 'fabricacion' dentro de 'informacion'.
            pais: 'Mexico' // Propiedad 'pais' en 'fabricacion'.
        }
    }
};

// Ejemplo de desestructuración de objetos anidados.
// Extraer propiedades de un objeto y de objetos anidados dentro de él.

// Esta línea desestructura 'nombre' y 'informacion' del objeto 'producto'.
// Además, desestructura 'peso' y 'medida' del objeto anidado 'medidas'.
const { nombre, informacion, informacion: { medidas: { peso, medida } } } = producto;
// Muestra el objeto 'producto' completo.
console.log(producto); // { nombre: 'Monitor 33 pulgadas', precio: 30, disponible: true, informacion: { medidas: { peso: '1kg', medida: '1m' }, fabricacion: { pais: 'Mexico' } } }

// Muestra 'Monitor 33 pulgadas'.
console.log(nombre); // Monitor 33 pulgadas

// Muestra el objeto 'informacion' completo.
console.log(informacion); // { medidas: { peso: '1kg', medida: '1m' }, fabricacion: { pais: 'Mexico' } }

// Muestra '1kg'.
console.log(peso); // 1kg

// Muestra '1m'.
console.log(medida); // 1m

// Desestructuración con propiedades diferentes.
// Extraer propiedades de 'informacion' y del objeto anidado 'fabricacion'.

// Desestructura 'fabricacion' y 'pais' del objeto anidado 'fabricacion'.
const { informacion: { fabricacion, fabricacion: { pais } } } = producto;
console.log(producto) // { nombre: 'Monitor 33 pulgadas', precio: 30, disponible: true, informacion: { medidas: { peso: '1kg', medida: '1m' }, fabricacion: { pais: 'Mexico' } } }

// Muestra el objeto 'fabricacion'.
console.log(fabricacion); // { pais: 'Mexico' }
// Muestra 'Mexico'.
console.log(pais); // Mexico
