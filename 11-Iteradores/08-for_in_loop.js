/* 
El bucle for...in en JavaScript es una estructura de control que se utiliza para iterar sobre las propiedades enumerables de un objeto.

Aquí está la definición básica:
for (variable in objeto) {
    // código a ejecutar en cada iteración
}

variable: En cada iteración, variable es asignada al nombre de la propiedad actual.
objeto: Es el objeto sobre el cual se iterará.
*/

// El iterador for of, itera sobre arreglos
const automovilof = [
    { caracteristicas: 'Camaro' },
    { caracteristicas: '6.0' },
    { caracteristicas: '1963' },
    { caracteristicas: 'Chevrolet' }
];

for (let caracteristicas of automovilof) {
    // Impresión de las características del automóvil.
    console.log(caracteristicas.caracteristicas); // Camaro, 6.0, 1963, Chevrolet
}


// Definición de un objeto 'automovilin'.
let automovilin = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1963',
    marca: 'Chevrolet'
};
// Uso del bucle for...in para iterar sobre las propiedades del objeto 'automovilin'.
for (let auto in automovilin) {
    // Imprime cada clave y su valor.
    console.log(`${auto} : ${automovilin[auto]}`); // modelo : Camaro, motor : 6.0, anio : 1963, marca : Chevrolet
}

// Recorriendo un array de objetos con for...in

// Se declara una constante llamada 'automovilofArr' que es un array de objetos.
// Cada objeto tiene una propiedad llamada 'caracteristicas' que es una cadena de texto.
const automovilofArr = [
    { caracteristicas: 'Camaro' },
    { caracteristicas: '6.0' },
    { caracteristicas: '1963' },
    { caracteristicas: 'Chevrolet' }
];

// Se utiliza un bucle 'for...in' para iterar sobre las propiedades enumerables del array 'automovilofArr'.
// En este caso, las propiedades enumerables son los índices de los elementos del array (0, 1, 2, 3).
for (let index in automovilofArr) {
    /*
    En cada iteración del bucle, 'index' es una cadena de texto que representa el índice del elemento actual.
    Se accede al elemento del array en el índice actual utilizando la sintaxis de corchetes.
    Esto devuelve el objeto en el índice actual del array.
    Luego, se accede a la propiedad 'caracteristicas' de este objeto.
    Esto devuelve la cadena de texto que es el valor de la propiedad 'caracteristicas'.
    */
    let caracteristica = automovilofArr[index].caracteristicas;

    // Se imprime la cadena de texto.
    console.log(caracteristica); // 'Camaro', '6.0', '1963', 'Chevrolet'
}