// Trabajo con objetos anidados en JavaScript.

// Declaración de un objeto 'producto'.
// Este objeto incluye propiedades básicas y un objeto anidado 'informacion'.
const producto = {
    nombre: "Monitor 33 pulgadas", // Propiedad 'nombre'.
    precio: 30, // Propiedad 'precio'.
    disponible: true, // Propiedad 'disponible'.
    informacion: { // Objeto anidado 'informacion'.
        medidas: { // Objeto anidado 'medidas' dentro de 'informacion'.
            peso: '1kg', // Propiedad 'peso' en el objeto anidado 'medidas'.
            medida: '1m' // Propiedad 'medida' en el objeto anidado 'medidas'.
        },
        fabricacion: { // Objeto anidado 'fabricacion' dentro de 'informacion'.
            pais: 'Mexico' // Propiedad 'pais' en el objeto anidado 'fabricacion'.
        }
    }
};

// Acceso a propiedades de objetos anidados.
// Acceder a un objeto anidado se hace utilizando la sintaxis de punto sucesivamente.

// Muestra el objeto 'informacion' completo.
console.log(producto.informacion); // {medidas: { peso: '1kg', medida: '1m' }, fabricacion: { pais: 'Mexico' }}

// Muestra el objeto 'medidas' dentro de 'informacion'.
console.log(producto.informacion.medidas); // { peso: '1kg', medida: '1m' }

// Muestra el objeto 'fabricacion' dentro de 'informacion'.
console.log(producto.informacion.fabricacion); // { pais: 'Mexico' }

// Muestra el valor de la propiedad 'pais' dentro del objeto anidado 'fabricacion'.
console.log(producto.informacion.fabricacion.pais); // Mexico

// NOTA: Cada 'punto' en la sintaxis accede a un nivel más profundo del objeto.
