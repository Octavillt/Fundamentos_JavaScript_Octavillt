// Declaración de un arreglo de números.
const numeros = [10, 20, 30, 40, 50]; // Este arreglo contiene cinco números.

// Declaración de un arreglo con un arreglo anidado.
const numeros2 = [10, 20, 30, 40, 50, [1, 2, 3]]; // El último elemento es un arreglo de tres números.

// Imprimir el arreglo completo 'numeros' en la consola.
console.log(numeros); // Muestra [10, 20, 30, 40, 50] en la consola.

// Imprimir el arreglo 'numeros' en una tabla en la consola.
console.table(numeros); // Muestra una tabla en la consola con los valores del arreglo 'numeros'.

// Acceder a elementos específicos del arreglo 'numeros'.
console.log(numeros[0]); // Imprime el primer elemento del arreglo, que es 10.
console.log(numeros[1]); // Imprime el segundo elemento, que es 20.
console.log(numeros[3]); // Imprime el cuarto elemento, que es 40.

// Intento de acceder a un elemento fuera del rango del arreglo.
console.log(numeros[20]); // Imprime 'undefined' porque no hay un elemento en la posición 20.

// Acceder a un elemento de un arreglo anidado.
console.log(numeros2[5][2]); // Imprime el tercer elemento del arreglo anidado, que es 3.
