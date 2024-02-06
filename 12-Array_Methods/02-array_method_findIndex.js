// Declaración de un array 'meses' que contiene nombres de meses en forma de strings.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Declaración de un array 'carrito' que contiene varios objetos. Cada objeto representa un producto con un 'producto' y un 'precio'.
const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },
];

// Ejemplo de uso de 'forEach' para encontrar un índice. Recorre 'meses' y busca el mes 'Mayo'.
// Imprime el índice del mes 'Mayo' si lo encuentra.
meses.forEach((mes, index) => {
    if (mes === 'Mayo') {
        console.log(`Encontrado en el indice ${index}`);
    }
});

// Ejemplo comentado de 'findIndex' para encontrar el índice del mes 'Mayo'.
// const indice = meses.findIndex( (mes) => {
//     return mes === 'Mayo';
// });
// console.log(indice);

// Uso de 'findIndex' para encontrar el índice del mes 'Abril' en el array 'meses'.
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice); // Imprime el índice de 'Abril'.

// Uso de 'findIndex' para intentar encontrar un mes que no está en el array ('Julio').
const indiceFalse = meses.findIndex(mes => mes === 'Julio');
console.log(indiceFalse); // Imprime -1, ya que 'Julio' no está en el array.

// Operador ternario que imprime un mensaje según si el mes fue encontrado o no.
console.log(indiceFalse > 0 ? 'Se Encontro el mes digitado...!' : 'No se encontro ninguna incidencia...');

// Uso de 'findIndex' para encontrar el índice de un objeto en 'carrito' cuyo 'producto' es 'Audifonos'.
const indiceCarrito = carrito.findIndex(carrito => carrito.producto === 'Audifonos');
console.log(indiceCarrito); // Imprime el índice del objeto con 'producto' igual a 'Audifonos'.

// Uso de 'findIndex' para encontrar el índice de un objeto en 'carrito' cuyo 'precio' es 300.
const indicePrecio = carrito.findIndex(carrito => carrito.precio === 300);
console.log(indicePrecio); // Imprime el índice del primer objeto con 'precio' igual a 300.
