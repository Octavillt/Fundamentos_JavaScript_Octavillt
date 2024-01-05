// Desestructuración de objetos anidados en JavaScript

const producto = {
    nombre: "Monitor 33 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true, // Propiedad 'disponible'.
    informacion: {
        medidas: {
            peso: '1kg', // Propiedad 'peso' dentro de un objeto anidado.
            medida: '1m' // Propiedad 'medida' dentro de un objeto anidado.
        },
        fabricacion: {
            pais: 'Mexico' // Propiedad 'pais' dentro de un objeto anidado.
        }
    }
};

// Desestructuración de objetos anidados

// Extrae 'nombre' y 'informacion', y dentro de 'informacion' extrae 'peso' y 'medida'.
// const { nombre, informacion, informacion: { medidas: { peso, medida } } } = producto;
console.log(nombre); // Muestra 'Monitor 33 pulgadas'.
console.log(informacion); // Muestra el objeto 'informacion' completo.
console.log(peso); // Muestra '1kg'.
console.log(medida); // Muestra '1m'.

// Desestructuración con propiedades diferentes

// Extrae 'nombre' y 'informacion', y dentro de 'informacion' extrae 'fabricacion' y dentro de 'fabricacion' 'pais'.
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;
console.log(nombre); // Muestra 'Monitor 33 pulgadas'.
console.log(informacion); // Muestra el objeto 'informacion' completo.
console.log(fabricacion); // Muestra el objeto 'fabricacion'.
console.log(pais); // Muestra 'Mexico'.
