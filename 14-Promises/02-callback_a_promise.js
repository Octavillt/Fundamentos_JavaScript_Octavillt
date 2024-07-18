// Definimos un array vacío llamado 'paises'
const paises = [];

// Función 'nuevoPais' que toma el nombre de un país y devuelve una Promesa
const nuevoPais = pais => new Promise((resolve, reject) => {
    // Usamos setTimeout para simular una operación asíncrona que toma 3 segundos
    setTimeout(() => {
        // Agregamos el país al array 'paises'
        paises.push(pais);
        // Resolvemos la promesa con un mensaje de éxito que incluye el nombre del país agregado
        resolve(`Agregado: ${pais}`);
    }, 3000); // Tiempo de espera de 3 segundos
});

// Llamamos a la función 'nuevoPais' para agregar 'Alemania' y encadenamos promesas
nuevoPais('Alemania')
    .then(resultado => {
        // Si la promesa se cumple, imprimimos el resultado y el array 'paises'
        console.log(resultado);
        console.log(paises);
        // Retornamos otra llamada a 'nuevoPais' para agregar 'Francia'
        return nuevoPais('Francia');
    })
    .then(resultado => {
        // Si la promesa se cumple, imprimimos el resultado y el array 'paises'
        console.log(resultado);
        console.log(paises);
        // Retornamos otra llamada a 'nuevoPais' para agregar 'Inglaterra'
        return nuevoPais('Inglaterra');
    })
    .then(resultado => {
        // Si la promesa se cumple, imprimimos el resultado y el array 'paises'
        console.log(resultado);
        console.log(paises);
    })
    // Manejamos cualquier error que ocurra durante las promesas encadenadas
    .catch(error => {
        console.error(error);
    });
