// Uso de la palabra clave 'this' en funciones dentro de objetos en JavaScript.

// Declaración del objeto 'producto'.
const producto = {
    nombre: "Monitor 20 pulgadas", // Propiedad 'nombre'.
    precio: 300, // Propiedad 'precio'.
    disponible: true, // Propiedad 'disponible'.
    mostrarInfo: function () { // Método 'mostrarInfo'.
        // 'this' se refiere al objeto 'producto' dentro de esta función.
        // Utiliza 'this' para acceder a las propiedades 'nombre' y 'precio' del objeto 'producto'.
        return `El Producto: ${this.nombre} tiene un precio de ${this.precio}`;
        // Esta línea devuelve una cadena de texto que incluye el nombre y el precio del producto.
        // 'this.nombre' y 'this.precio' obtienen los valores de las propiedades del objeto 'producto'.
    }
};

// Declaración de un segundo objeto 'producto2'.
const producto2 = {
    nombre: "PC", // Propiedad 'nombre'.
    precio: 639, // Propiedad 'precio'.
    disponible: true, // Propiedad 'disponible'.
    mostrarInfo: function () { // Método 'mostrarInfo'.
        // 'this' se refiere al objeto 'producto2' dentro de esta función.
        // Aquí, 'this' ayuda a acceder a las propiedades de 'producto2'.
        return `El Producto: ${this.nombre} tiene un precio de ${this.precio}`;
        // Similar al primer objeto, devuelve una cadena con el nombre y precio del 'producto2'.
    }
};

// Llamada al método 'mostrarInfo' de ambos objetos.
console.log(producto.mostrarInfo()); // Muestra la información de 'producto'.
console.log(producto2.mostrarInfo()); // Muestra la información de 'producto2'.
// Al llamar a 'mostrarInfo', se ejecuta la función dentro de cada objeto, y 'this' se refiere al objeto desde el cual se llama el método.
