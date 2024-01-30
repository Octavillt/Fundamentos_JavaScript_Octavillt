/*
Propósito: Crear un nuevo arreglo transformando cada elemento del arreglo original mediante una función proporcionada.
Retorno: Retorna un nuevo arreglo con los elementos transformados.
Modificación del Arreglo Original: No modifica el arreglo original.
Uso Común: Se usa cuando necesitas transformar los elementos de un arreglo y obtener un nuevo arreglo con esos elementos transformados.
*/
let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Transforma cada elemento a un formato de cadena con su índice.
let pendientesConIndice = pendientes.map((pendiente, indice) => `${indice} : ${pendiente}`);

// Imprime los resultados.
console.log(pendientesConIndice);


const carrito = [
    { nombre: 'Monitor 23 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

// Transforma cada objeto a una cadena que describe el producto.
let detallesCarrito = carrito.map(producto => `Agregaste: ${producto.nombre} - $${producto.precio}`);

// Imprime los resultados.
console.log(detallesCarrito);
