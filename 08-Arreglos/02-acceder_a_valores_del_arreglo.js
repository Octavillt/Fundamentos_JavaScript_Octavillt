// Acceso a valores de un arreglo en JavaScript.

// Declaración de un arreglo de números.
const numeros = [10, 20, 30, 40, 50]; // Este arreglo contiene cinco números.
// Aquí, 'numeros' es un arreglo que contiene cinco elementos numéricos.

// Imprimir el arreglo completo 'numeros' en la consola.
// Esta línea imprime todos los elementos del arreglo 'numeros'.
console.log(numeros); // [ 10, 20, 30, 40, 50 ]

/*
Imprimir el arreglo 'numeros' en una tabla en la consola.
Muestra una tabla en la consola con los valores del arreglo 'numeros'.
'console.table' proporciona una representación tabular de los elementos, facilitando su visualización.
*/
console.table(numeros); /*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 10     │
│ 1       │ 20     │
│ 2       │ 30     │
│ 3       │ 40     │
│ 4       │ 50     │
└─────────┴────────┘
*/

/*
Acceder a elementos específicos del arreglo 'numeros'.
Se utiliza el índice del elemento entre corchetes para acceder a su valor.
Los índices de los arreglos en JavaScript comienzan en 0.
*/

// Imprime el primer elemento del arreglo, que es 10.
console.log(numeros[0]); // 10

// Imprime el segundo elemento, que es 20.
console.log(numeros[1]); // 20

// Imprime el cuarto elemento, que es 40. 
console.log(numeros[3]); // 40

/*
Intento de acceder a un elemento fuera del rango del arreglo.
Imprime 'undefined' porque no hay un elemento en la posición 20.
Acceder a un índice que no existe en el arreglo devuelve 'undefined'.
*/
console.log(numeros[20]); // undefined


// Declaración de un arreglo con un arreglo anidado.
// El último elemento es un arreglo de tres números.
const numeros2 = [10, 20, 30, 40, 50, [1, 2, 3]];

/*
Acceder a un elemento de un arreglo anidado.
Imprime el tercer elemento del arreglo anidado, que es 3.
Para acceder a un elemento de un arreglo anidado, se utilizan índices sucesivos.
Aquí, 'numeros2[5]' accede al arreglo anidado y '[2]' accede al tercer elemento de ese arreglo.
*/
console.log(numeros2[5][2]); // 3
