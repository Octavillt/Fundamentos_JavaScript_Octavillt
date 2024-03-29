/*
El método concat() se utiliza para combinar dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array
que contiene los elementos de los arrays que se combinaron.

Caso de uso:

// Tenemos dos arrays de números
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Queremos combinar estos dos arrays en uno
let arrayCombinado = array1.concat(array2);

// Esto imprimirá '[1, 2, 3, 4, 5, 6]'
console.log(arrayCombinado); // [1, 2, 3, 4, 5, 6]

En este ejemplo, llamamos al método concat() en array1 y pasamos array2 como argumento. concat() devuelve un nuevo array que contiene
todos los elementos de array1 seguidos de todos los elementos de array2. Los arrays originales (array1 y array2) no se modifican.
*/
// Se declaran tres arrays que representan los meses del año divididos en tres grupos.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

let resultadoM;

// Ejemplo utilizando el método .concat
// .concat() se usa para unir los arrays meses, meses2 y meses3 en uno solo.
resultadoM = meses.concat(meses2, meses3);
// Muestra en consola el array resultante con todos los meses del año.
console.log(resultadoM); /*
[
    'Enero',      'Febrero',
    'Marzo',      'Abril',
    'Mayo',       'Junio',
    'Julio',      'Agosto',
    'Septiembre', 'Octubre',
    'Noviembre',  'Diciembre'
]
*/
/*
Ejemplo utilizando el Spread Operator
Se combinan los arrays meses y meses2 en uno nuevo.
Es importante asegurarse de que sean arrays al usar el Spread Operator.
*/
resultadoM = [...meses, ...meses2];
// Muestra en consola la combinación de los dos primeros grupos de meses.
console.log(resultadoM); /*
[
    'Enero',      'Febrero',
    'Marzo',      'Abril',
    'Mayo',       'Junio',
    'Julio',      'Agosto',
    'Septiembre'
]
*/

// Aquí se combinan todos los arrays de meses usando el Spread Operator.
resultadoM = [...meses, ...meses2, ...meses3];
// Muestra en consola el array completo con todos los meses del año.
console.log(resultadoM); /*
[
    'Enero',      'Febrero',
    'Marzo',      'Abril',
    'Mayo',       'Junio',
    'Julio',      'Agosto',
    'Septiembre', 'Octubre',
    'Noviembre',  'Diciembre'
]
*/

/*
NOTA: El orden en el que se concatenan o se expanden los arrays afecta el resultado final.
Por ejemplo, si se cambia el orden, los meses se mostrarían en un orden diferente.
*/
resultadoM = [...meses3, ...meses, ...meses2];
// Muestra en consola el array con los meses en un orden diferente.
console.log(resultadoM); /*
[
    'Octubre',   'Noviembre',
    'Diciembre', 'Enero',
    'Febrero',   'Marzo',
    'Abril',     'Mayo',
    'Junio',     'Julio',
    'Agosto',    'Septiembre'
]
*/