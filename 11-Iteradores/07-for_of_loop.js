/* 
El bucle for...of en JavaScript es una estructura de control que se utiliza para iterar sobre los elementos de una colección (como un array o un string).

Aquí está la definición básica:
for (variable of iterable) {
    // código a ejecutar en cada iteración
}

variable: En cada iteración, variable es asignada al valor del elemento actual.
iterable: Es el objeto sobre el cual se iterará. Debe ser una colección como un array, un string, un set, etc.
En tu código, for...of se utiliza para iterar sobre el array pendientes. Para cada elemento del array, 
se ejecuta un bloque de código que imprime el valor del elemento.

Es importante notar que for...of no proporciona el índice del elemento actual. Si se requiere el índice, se puede usar 
un bucle for tradicional o el método forEach.
*/

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Bucle for...of para iterar sobre cada elemento del array 'pendientes'.
for (let pendiente of pendientes) {
    // Imprime cada elemento del array.
    console.log(pendiente); // Tarea, Comer, Proyecto, Estudiar JavaScript
}

// Definiendo un array 'carrito' con objetos.
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
    console.log(`${producto.nombre} - $${producto.precio}`); /*
    Monitor 23 Pulgadas - $500
    Televisión 50 Pulgadas - $700
    Tablet  - $300
    Audifonos - $200
    Teclado - $50
    Celular - $500
    */
}

// Definición de un objeto 'automovilin'.
let automovilin = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1963',
    marca: 'Chevrolet'
};

// Uso de for...of para iterar sobre las entradas de un objeto.

/*
Uso de for...of para iterar sobre las entradas de un objeto.
La función Object.entries(automovilin) devuelve un array de arrays, donde cada subarray es una entrada del objeto y contiene dos elementos: la clave y el valor.
Por ejemplo, para el objeto { modelo: 'Camaro', motor: '6.0' }, Object.entries devolvería [['modelo', 'Camaro'], ['motor', '6.0']].
*/
for (let [llave, valor] of Object.entries(automovilin)) {
    /* 
    En cada iteración del bucle, la destructuración de arrays se utiliza para asignar la clave y el valor de la entrada actual a las variables llave y valor, respectivamente.
    Por ejemplo, en la primera iteración, llave sería 'modelo' y valor sería 'Camaro'.
    Luego, se imprime una cadena de texto que contiene la clave y el valor.
    La sintaxis de las plantillas de cadena (backticks `` y ${}) se utiliza para insertar las variables llave y valor en la cadena.
    */
    console.log(`${llave} - ${valor}`); // modelo - Camaro, motor - 6.0, anio - 1963, marca - Chevrolet
}