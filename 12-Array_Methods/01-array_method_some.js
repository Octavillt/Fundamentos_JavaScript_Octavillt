// Declaración de un array llamado 'meses' que contiene strings de nombres de meses.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Declaración de un array de objetos llamado 'carrito'. Cada objeto representa un producto con propiedades 'nombre' y 'precio'.
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];
/*
Uso del método 'forEach' para iterar sobre cada elemento del array 'meses'.
Por cada elemento (mes), se verifica si es igual a 'Enero'.
Si se encuentra, se imprime un mensaje en la consola.
*/
meses.forEach(mes => {
    if (mes === 'Enero') {
        console.log('Enero si existe...')
    }
});

// Utilización del método 'includes' para verificar si el string 'Enero' está presente en el array 'meses'.
// El resultado (true o false) se guarda en la variable 'resultado'.
const resultado = meses.includes('Enero');
// Se imprime el resultado en la consola.
console.log(resultado);

// Chequeo similar al anterior pero con el valor 'Diciembre'.
const resultado2 = meses.includes('Diciembre');
// Hay un error aquí, debería imprimir 'resultado2', no 'resultado'.
console.log(resultado);

// En el caso de un arreglo de objetos .includes no es la mejor opción, podrías utilizar uno llamado .some

// const existe = carrito.some( (producto) =>{
//     return producto.nombre === 'Celular'
// });
// console.log(existe);

// Uso del método 'some' para verificar si algún objeto en 'carrito' tiene un nombre igual a 'Celular'.
// 'some' devuelve true si al menos un elemento cumple con la condición.
const existe = carrito.some(producto => producto.nombre === 'Celular');
// Se imprime el resultado de la comprobación en la consola.
console.log(existe);

// Uso de 'some' con el array 'meses' para comprobar si contiene el mes 'Febrero'.
const existe2 = meses.some(mes => mes === 'Febrero');
// Se imprime el resultado en la consola.
console.log(existe2);