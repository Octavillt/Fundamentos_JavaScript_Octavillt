// Definimos un array llamado 'paises' con una lista de países
const paises = ['Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay', 'México'];

// Función 'nuevoPais' que toma dos parámetros: el array 'paises' y una función 'callback'
const nuevoPais = (paises, callback) => {
    // Usamos setTimeout para simular una operación asíncrona que toma 3 segundos
    setTimeout(() => {
        // Agregamos 'España' al array 'paises' después de 3 segundos
        paises.push('España');
        // Llamamos a la función 'callback' después de agregar el nuevo país
        callback();
    }, 3000); // Tiempo de espera de 3 segundos
}

// Función 'mostrarPaises' que muestra los países en la consola
const mostrarPaises = () => {
    // Imprimimos un mensaje indicando que se están mostrando los países
    console.log('Mostrando paises...');
    // Usamos setTimeout para simular una operación asíncrona que toma 2 segundos
    setTimeout(() => {
        // Recorremos el array 'paises' y mostramos cada país en la consola
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 2000); // Tiempo de espera de 2 segundos
    // Imprimimos un mensaje indicando que se está agregando un nuevo país
    console.log('Agregando un nuevo país...');
};

// Llamamos a la función 'mostrarPaises' para mostrar los países inicialmente
mostrarPaises();
// Llamamos a la función 'nuevoPais' para agregar un nuevo país y luego mostrar los países nuevamente
nuevoPais(paises, mostrarPaises);
