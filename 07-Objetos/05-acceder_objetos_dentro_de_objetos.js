// Trabajo con objetos anidados en JavaScript

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

// Acceso a propiedades de objetos anidados
console.log(producto.informacion); // Muestra el objeto 'informacion'.
console.log(producto.informacion.medidas); // Muestra el objeto 'medidas' dentro de 'informacion'.
console.log(producto.informacion.fabricacion); // Muestra el objeto 'fabricacion' dentro de 'informacion'.
console.log(producto.informacion.fabricacion.pais); // Muestra el valor de la propiedad 'pais' dentro del objeto anidado 'fabricacion'.
