/*
"Callback Hell" o "Pyramid Of Doom", donde las llamadas asíncronas están anidadas
una dentro de otra, lo que puede hacer que el código sea difícil de leer y mantener.
*/


// Definimos un array vacío llamado 'paises'
const paises = [];

// Función 'nuevoPais' que toma dos parámetros: el nombre de un país y una función 'callback'
const nuevoPais = (pais, callback) => {
    // Agregamos el país al array 'paises'
    paises.push(pais);
    // Imprimimos un mensaje indicando que se está agregando el país
    console.log(`Agregando ${pais}...`);
    // Llamamos a la función 'callback' después de agregar el país
    callback();
};

// Función 'mostrarPaises' que muestra el contenido del array 'paises' en la consola
const mostrarPaises = () => {
    // Imprimimos el array 'paises' en la consola
    console.log(paises);
};

// Función 'iniciarCallbackHell' que inicia una serie de operaciones asíncronas anidadas
const iniciarCallbackHell = () => {
    // Usamos setTimeout para simular una operación asíncrona que toma 3 segundos
    setTimeout(() => {
        // Agregamos 'Alemania' al array y mostramos los países
        nuevoPais('Alemania', mostrarPaises);
        // Anidamos otro setTimeout que toma 3 segundos
        setTimeout(() => {
            // Agregamos 'Estados Unidos' al array y mostramos los países
            nuevoPais('Estados Unidos', mostrarPaises);
            // Anidamos otro setTimeout que toma 3 segundos
            setTimeout(() => {
                // Agregamos 'Francia' al array y mostramos los países
                nuevoPais('Francia', mostrarPaises);
            }, 3000); // Tiempo de espera de 3 segundos para el tercer país
        }, 3000); // Tiempo de espera de 3 segundos para el segundo país
    }, 3000); // Tiempo de espera de 3 segundos para el primer país
};

// Llamamos a la función 'iniciarCallbackHell' para iniciar el proceso asíncrono
iniciarCallbackHell();
