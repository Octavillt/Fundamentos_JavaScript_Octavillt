// Se declaran tres arrays que representan los meses del año divididos en tres grupos.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

let resultadoM;

// Ejemplo utilizando el método .concat
// .concat() se usa para unir los arrays meses, meses2 y meses3 en uno solo.
resultadoM = meses.concat(meses2, meses3);
console.log(resultadoM); // Muestra en consola el array resultante con todos los meses del año.
/*
Ejemplo utilizando el Spread Operator
Se combinan los arrays meses y meses2 en uno nuevo.
Es importante asegurarse de que sean arrays al usar el Spread Operator.
*/
resultadoM = [...meses, ...meses2];
console.log(resultadoM); // Muestra en consola la combinación de los dos primeros grupos de meses.

// Aquí se combinan todos los arrays de meses usando el Spread Operator.
resultadoM = [...meses, ...meses2, ...meses3];
console.log(resultadoM); // Muestra en consola el array completo con todos los meses del año.

/*
Comentario sobre la importancia del orden al combinar arrays.
El orden en el que se concatenan o se expanden los arrays afecta el resultado final.
Por ejemplo, si se cambia el orden, los meses se mostrarían en un orden diferente.
*/
// resultadoM = [ ...meses3, ...meses, ...meses2];
// console.log(resultadoM);