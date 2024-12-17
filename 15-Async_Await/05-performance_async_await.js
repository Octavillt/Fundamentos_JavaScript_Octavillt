// URL de las APIs que se van a consumir
const url = "https://jsonplaceholder.typicode.com/comments"; // URL de comentarios
const url2 = "https://jsonplaceholder.typicode.com/photos"; // URL de fotos

// Función countRegisters: Obtiene el número de registros de una API
/*
const countRegisters = async (url) => {
    // Realiza una petición HTTP GET usando fetch
    const response = await fetch(url);
    // Parsea la respuesta a formato JSON
    const data = await response.json();
    // Imprime en consola la cantidad de registros recibidos
    return console.log(`Numero de registros De la API: ${data.length} Registros`);
};
*/


// Primera función: Realiza dos consultas de manera secuencial
const consultarAPI = async () => {
    // Guarda el tiempo inicial para medir rendimiento
    const inicio = performance.now();

    // Realiza la primera petición y espera a que finalice
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    // Realiza la segunda petición después de que la primera ha terminado
    const respuesta2 = await fetch(url2);
    const resultado2 = await respuesta2.json();

    // Guarda el tiempo final para medir rendimiento
    const fin = performance.now();
    // Imprime el tiempo total de ejecución
    console.log(`Tiempo de ejecución 1ra Función: ${Math.round(fin - inicio)} ms`);
};

// Segunda función: Realiza dos consultas simultáneamente
async function consultarAPI2() {
    // Guarda el tiempo inicial para medir rendimiento
    const inicio = performance.now();

    // Realiza dos peticiones simultáneamente usando Promise.all
    const [respuesta, respuesta2] = await Promise.all([
        fetch(url),   // Primera petición: comentarios
        fetch(url2)   // Segunda petición: fotos
    ]);

    // Convierte ambas respuestas en formato JSON
    const resultado = await respuesta.json();
    const resultado2 = await respuesta2.json();

    // Guarda el tiempo final para medir rendimiento
    const fin = performance.now();
    // Imprime el tiempo total de ejecución
    console.log(`Tiempo de ejecución 2da Función: ${Math.round(fin - inicio)} ms`);
}


// Llamadas a las funciones
/*
countRegisters(url);   // Cuenta el número de registros de la primera API
countRegisters(url2);  // Cuenta el número de registros de la segunda API
*/
consultarAPI();        // Ejecuta las consultas de manera secuencial
consultarAPI2();       // Ejecuta las consultas de manera simultánea