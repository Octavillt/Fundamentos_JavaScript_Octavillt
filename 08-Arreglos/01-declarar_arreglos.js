// Declaración de arreglos en JavaScript.

// Declaración de un arreglo de números usando corchetes.
// Esta es la forma más común y directa de crear un arreglo en JavaScript.
// Aquí, 'numeros' es un arreglo que contiene cinco números.
// Los corchetes '[]' se utilizan para delimitar el arreglo, y los elementos se separan por comas.
const numeros = [10, 20, 30, 40, 50];
// Imprime el arreglo 'numeros' en la consola.
console.log(numeros); // [ 10, 20, 30, 40, 50 ]


// Declaración de un arreglo de strings (meses del año) usando 'new Array'.
// 'new Array' es otra forma de crear un arreglo, pero es menos común que la sintaxis de corchetes.
// 'meses' es un arreglo que contiene nombres de meses.
// 'new Array' crea un arreglo y los elementos se pasan como argumentos.
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
// Imprime el arreglo 'meses' en la consola.
console.log(meses); // [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ]

// Declaración de un arreglo con elementos de diferentes tipos.
// En JavaScript, los arreglos pueden contener elementos de diferentes tipos, incluyendo objetos y otros arreglos.
// 'deTodo' es un ejemplo de un arreglo con una variedad de tipos de datos, incluyendo strings, números, booleanos, objetos y arreglos.
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Octavio', trabajo: 'Desarrollador' }, [1, 2, 3, 4]];
// Imprime el arreglo 'deTodo' que contiene una mezcla de diferentes tipos de datos.
console.log(deTodo); // [ 'Hola', 10, true, 'si', null, { nombre: 'Octavio', trabajo: 'Desarrollador' }, [ 1, 2, 3, 4 ] ]

