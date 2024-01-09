// Declaración inicial del arreglo 'meses' con seis elementos.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Modificación del primer elemento del arreglo.
meses[0] = 'Nuevo Mes'; // Cambia 'Enero' por 'Nuevo Mes'.
console.table(meses); // Muestra el arreglo 'meses' en forma de tabla en la consola.

// Agregando un nuevo elemento al final del arreglo.
meses[6] = 'Ultimo Mes'; // Agrega 'Ultimo Mes' como séptimo elemento del arreglo.

// Agregando un elemento en una posición que no es inmediatamente después del último elemento existente.
meses[8] = 'Ultimo Mes[8]'; // Agrega 'Ultimo Mes[8]' en la posición 9, dejando un hueco en la posición 8.

// Imprimir el arreglo actualizado 'meses'.
console.log(meses); // Muestra el arreglo 'meses' con los nuevos cambios.
