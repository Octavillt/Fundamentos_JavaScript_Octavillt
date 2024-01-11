// Agregar y modificar elementos en un arreglo en JavaScript.

// Declaración inicial del arreglo 'meses' con seis elementos.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
// Aquí, 'meses' es un arreglo que inicialmente contiene los nombres de los primeros seis meses del año.

// Modificación del primer elemento del arreglo.
meses[0] = 'Nuevo Mes'; // Cambia 'Enero' por 'Nuevo Mes'.
// Esta línea modifica el valor del primer elemento (índice 0) del arreglo 'meses'.

console.table(meses); // Muestra el arreglo 'meses' en forma de tabla en la consola.
// 'console.table' proporciona una representación tabular del arreglo 'meses', facilitando la visualización.

// Agregando un nuevo elemento al final del arreglo.
meses[6] = 'Ultimo Mes'; // Agrega 'Ultimo Mes' como séptimo elemento del arreglo.
// Añade un nuevo elemento al final del arreglo 'meses' en la posición 6 (el séptimo elemento, ya que el conteo comienza en 0).

// Agregando un elemento en una posición que no es inmediatamente después del último elemento existente.
meses[8] = 'Ultimo Mes[8]'; // Agrega 'Ultimo Mes[8]' en la posición 9, dejando un hueco en la posición 8.
// Esta acción añade un elemento en la posición 8 del arreglo (noveno elemento), dejando un espacio vacío (undefined) en la posición 7.

// Imprimir el arreglo actualizado 'meses'.
console.log(meses); // Muestra el arreglo 'meses' con los nuevos cambios.
// El arreglo 'meses' ahora incluye los cambios realizados: el elemento modificado, el nuevo elemento agregado al final, y el elemento agregado con un hueco entre los elementos.
