// Agregar y modificar elementos en un arreglo en JavaScript.

// Declaración inicial del arreglo 'meses' con seis elementos.
// Aquí, 'meses' es un arreglo que inicialmente contiene los nombres de los primeros seis meses del año.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

/*
Modificación del primer elemento del arreglo.
Cambia 'Enero' por 'Nuevo Mes'.
Esta línea modifica el valor del primer elemento (índice 0) del arreglo 'meses'.
*/
meses[0] = 'Nuevo Mes';

// 'console.table' proporciona una representación tabular del arreglo 'meses', facilitando la visualización.
// Muestra el arreglo 'meses' en forma de tabla en la consola.
console.table(meses); /* 
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'Nuevo Mes' │
│ 1       │ 'Febrero'   │
│ 2       │ 'Marzo'     │
│ 3       │ 'Abril'     │
│ 4       │ 'Mayo'      │
│ 5       │ 'Junio'     │
└─────────┴─────────────┘
*/

/*
Agregando un nuevo elemento al final del arreglo.
Agrega 'Ultimo Mes' como séptimo elemento del arreglo.
Añade un nuevo elemento al final del arreglo 'meses' en la posición 6 (el séptimo elemento, ya que el conteo comienza en 0).
*/
meses[6] = 'Ultimo Mes';

/*
Agregando un elemento en una posición que no es inmediatamente después del último elemento existente.
Agrega 'Ultimo Mes[8]' en la posición 9, dejando un hueco en la posición 8.
Esta acción añade un elemento en la posición 8 del arreglo (noveno elemento), dejando un espacio vacío (undefined) en la posición 7.
*/
meses[8] = 'Ultimo Mes[8]';

/*
Imprimir el arreglo actualizado 'meses'.
Muestra el arreglo 'meses' con los nuevos cambios.
El arreglo 'meses' ahora incluye los cambios realizados: el elemento modificado, el nuevo elemento agregado al final, y el elemento agregado con un hueco entre los elementos.
*/
console.log(meses); // [ 'Nuevo Mes', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Ultimo Mes', <2 empty items>, 'Ultimo Mes[8]' ]
