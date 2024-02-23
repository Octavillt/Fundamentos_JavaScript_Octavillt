let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Bucle for...of para iterar sobre cada elemento del array 'pendientes'.
for (let pendiente of pendientes) {
    console.log(pendiente); // Imprime cada elemento del array.
}


const carrito = [
    { nombre: 'Monitor 23 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

// Bucle for...of para iterar sobre cada objeto en el array 'carrito'.
for (let producto of carrito) {
    // Imprime las propiedades de cada objeto.
    console.log(`${producto.nombre} - $${producto.precio}`);
}
