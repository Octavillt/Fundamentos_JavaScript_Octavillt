// El iterador for of, itera sobre arreglos
const automovilof = [
    { caracteristicas: 'Camaro' },
    { caracteristicas: '6.0' },
    { caracteristicas: '1963' },
    { caracteristicas: 'Chevrolet' }
];

for (let caracteristicas of automovilof) {
    console.log(caracteristicas.caracteristicas);
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
    console.log(`${auto} : ${automovilin[auto]}`); // Imprime cada clave y su valor.
}

// Uso de for...of para iterar sobre las entradas de un objeto.
for (let [llave, valor] of Object.entries(automovilin)) {
    console.log(`${llave} - ${valor}`); // Imprime cada clave y su valor.
}
