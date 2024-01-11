// Recorrido de un arreglo en JavaScript usando un bucle 'for'.

// Declaración de un arreglo de strings que representan los meses.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']; // Arreglo con los nombres de los meses.
// Aquí, 'meses' es un arreglo que contiene los nombres de los primeros seis meses del año.

// Imprimir la longitud del arreglo 'meses'.
console.log(meses.length); // Esto muestra '6', que es el número de elementos en el arreglo 'meses'.
// 'meses.length' proporciona el número total de elementos en el arreglo 'meses'.

// Uso de un bucle 'for' para recorrer todos los elementos del arreglo 'meses'.
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]); // Imprime cada elemento del arreglo 'meses' uno por uno.
    // 'i' es el índice del arreglo, que comienza en 0 y se incrementa en cada iteración hasta que alcanza la longitud del arreglo.
    // 'meses[i]' accede al elemento del arreglo en la posición 'i'.
}
// Este bucle 'for' itera sobre cada elemento del arreglo, imprimiendo su valor.
// Es una forma eficaz de recorrer todos los elementos de un arreglo cuando se necesita acceso al índice del elemento.
