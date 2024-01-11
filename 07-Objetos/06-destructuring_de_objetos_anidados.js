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
const { nombre, informacion, informacion: { medidas: { peso, medida } } } = producto;
// Esta línea desestructura 'nombre' y 'informacion' del objeto 'producto'.
// Además, desestructura 'peso' y 'medida' del objeto anidado 'medidas'.
console.log(nombre); // Muestra 'Monitor 33 pulgadas'.
console.log(informacion); // Muestra el objeto 'informacion' completo.
console.log(peso); // Muestra '1kg'.
console.log(medida); // Muestra '1m'.

// Desestructuración con propiedades diferentes.
// Extraer propiedades de 'informacion' y del objeto anidado 'fabricacion'.
const { informacion: { fabricacion, fabricacion: { pais } } } = producto;
// Desestructura 'fabricacion' y 'pais' del objeto anidado 'fabricacion'.
console.log(fabricacion); // Muestra el objeto 'fabricacion'.
console.log(pais); // Muestra 'Mexico'.
