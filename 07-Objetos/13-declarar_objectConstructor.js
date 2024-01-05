// Declaración de objetos en JavaScript

// Creación de un objeto usando un literal de objeto
const producto = {
    nombre: "Monitor 20 Pulgadas", // Propiedad 'nombre'.
    precio: 300, // Propiedad 'precio'.
    disponible: true // Propiedad 'disponible'.
};

// Creación de objetos usando un constructor de objetos
function Producto(nombre, precio) { // Definición de la función constructora 'Producto'.
    this.nombre = nombre; // 'this.nombre' se refiere a la propiedad 'nombre' del nuevo objeto.
    this.precio = precio; // 'this.precio' se refiere a la propiedad 'precio' del nuevo objeto.
    // No se incluye 'disponible' en este constructor.
}

// Uso del constructor para crear instancias del objeto 'Producto'
const producto2 = new Producto('Monitor 24 Pulgadas', 500); // Crea 'producto2' con 'nombre' y 'precio' dados.
console.log(producto2); // Muestra 'producto2'.

const producto3 = new Producto('Television', 100); // Crea 'producto3' con 'nombre' y 'precio' dados.
console.log(producto3); // Muestra 'producto3'.
