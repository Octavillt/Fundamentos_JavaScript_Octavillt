/*
El método map es una función de alto orden que se utiliza para crear un nuevo array con los resultados de llamar 
a una función proporcionada en cada elemento del array original.

Aquí está la definición básica:
let nuevoArray = array.map(funcion(currentValue, index, arr), thisValue)

currentValue (obligatorio): El valor del elemento actual.
index (opcional): El índice del elemento actual.
arr (opcional): El array que está siendo recorrido.
thisValue (opcional): Un valor que se utilizará como this al ejecutar la función.
*/
let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Transforma cada elemento a un formato de cadena con su índice.
let pendientesConIndice = pendientes.map((pendiente, indice) => `${indice} : ${pendiente}`);

// Imprime los resultados.
console.log(pendientesConIndice); // [ '0 : Tarea', '1 : Comer', '2 : Proyecto', '3 : Estudiar JavaScript' ]


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
console.log(detallesCarrito); /*
[
'Agregaste: Monitor 23 Pulgadas - $500',
'Agregaste: Televisión 50 Pulgadas - $700',
'Agregaste: Tablet  - $300',
'Agregaste: Audifonos - $200',
'Agregaste: Teclado - $50',
'Agregaste: Celular - $500'
]
*/
