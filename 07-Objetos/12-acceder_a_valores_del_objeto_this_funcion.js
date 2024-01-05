// Uso de la palabra clave 'this' en funciones dentro de objetos en JavaScript

// Declaración del objeto 'producto'
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 300, // Propiedad 'precio'.
    disponible: true, // Propiedad 'disponible'.
    mostrarInfo: function () { // Método 'mostrarInfo'.
        // 'this' se refiere al objeto 'producto' dentro de esta función.
        return `El Producto: ${this.nombre} tiene un precio de ${this.precio}`;
    }
};

// Declaración de un segundo objeto 'producto2'
const producto2 = {
    nombre: "PC", // Propiedad 'nombre'.
    precio: 639, // Propiedad 'precio'.
    disponible: true, // Propiedad 'disponible'.
    mostrarInfo: function () { // Método 'mostrarInfo'.
        // 'this' se refiere al objeto 'producto2' dentro de esta función.
        return `El Producto: ${this.nombre} tiene un precio de ${this.precio}`;
    }
};

// Llamada al método 'mostrarInfo' de ambos objetos
console.log(producto.mostrarInfo()); // Muestra la información de 'producto'.
console.log(producto2.mostrarInfo()); // Muestra la información de 'producto2'.
