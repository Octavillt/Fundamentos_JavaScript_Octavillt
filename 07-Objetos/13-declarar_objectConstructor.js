// Declaración de objetos en JavaScript

// Creación de un objeto usando un literal de objeto
// Esta es la forma más común y directa de crear un objeto en JavaScript.
const producto = {
    nombre: "Monitor 20 Pulgadas", // Propiedad 'nombre' con su valor.
    precio: 300, // Propiedad 'precio' con su valor.
    disponible: true // Propiedad 'disponible' con su valor.
};
// Aquí, 'producto' es un objeto con propiedades 'nombre', 'precio' y 'disponible'.
// Los literales de objeto son útiles para crear objetos con una estructura fija y conocida.

// Creación de objetos usando un constructor de objetos
// Este método es más versátil y se utiliza para crear varios objetos con la misma estructura.
function Producto(nombre, precio) { // Definición de la función constructora 'Producto'.
    this.nombre = nombre; // 'this.nombre' se refiere a la propiedad 'nombre' del nuevo objeto.
    this.precio = precio; // 'this.precio' se refiere a la propiedad 'precio' del nuevo objeto.
    // No se incluye 'disponible' en este constructor.
}
// 'Producto' es una función constructora que crea objetos con propiedades 'nombre' y 'precio'.

// Uso del constructor para crear instancias del objeto 'Producto'
const producto2 = new Producto('Monitor 24 Pulgadas', 500); // Crea 'producto2' con 'nombre' y 'precio' dados.
console.log(producto2); // Muestra 'producto2' en consola.
// 'producto2' es una instancia del objeto 'Producto', creada usando el constructor.

const producto3 = new Producto('Television', 100); // Crea 'producto3' con 'nombre' y 'precio' dados.
console.log(producto3); // Muestra 'producto3' en consola.
// 'producto3' es otra instancia de 'Producto', demostrando cómo se pueden crear múltiples objetos con la misma estructura.
