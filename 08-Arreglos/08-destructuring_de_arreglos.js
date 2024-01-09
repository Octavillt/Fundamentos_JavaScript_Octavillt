/*
Desestructuración de Arreglos en JavaScript.
La desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos 
o propiedades de objetos en variables distintas.
*/
// Declaración de un arreglo 'numeros' con cinco elementos numéricos.
const numeros = [10, 20, 30, 40, 50];

// Uso básico de la desestructuración para extraer elementos individuales del arreglo.

// const [primero, , tercero] = numeros;
/*
Esta línea crea dos nuevas variables 'primero' y 'tercero'.
'primero' recibe el valor del primer elemento del arreglo (10).
La coma doble ' ,' indica que se omite el segundo elemento del arreglo.
'tercero' recibe el valor del tercer elemento del arreglo (30).
Este código está comentado y no se ejecuta en el ejemplo actual.
*/

// Desestructuración con el operador de propagación '...'.
const [primero, , segundo, ...tercero] = numeros;
/*
Aquí, 'primero' recibe el valor 10 y 'segundo' recibe el valor 30 del arreglo.
El operador '...' (spread operator) asigna el resto de los elementos a 'tercero'.
En este caso, 'tercero' se convierte en un nuevo arreglo que contiene [40, 50].
*/

// Imprimiendo los resultados en la consola.
console.log(numeros); // Imprime el arreglo original 'numeros' [10, 20, 30, 40, 50].
console.log(tercero); // Imprime el nuevo arreglo 'tercero' que contiene los elementos restantes [40, 50].

// Notas sobre la Desestructuración:
/*
La desestructuración es útil para extraer múltiples valores de un arreglo de una manera concisa y legible.
También permite ignorar ciertos elementos del arreglo si no son necesarios para una operación particular.
El uso del operador de propagación '...' es especialmente útil para trabajar con el 'resto' de un arreglo.
La desestructuración ayuda a escribir código más limpio y expresivo, facilitando la manipulación de datos dentro de arreglos.
*/
