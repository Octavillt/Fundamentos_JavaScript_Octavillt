// URL de la API que vamos a consumir
const url = 'https://picsum.photos/list';

// Escuchador de eventos que se activa cuando el contenido del DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Llama a la función que utiliza promesas
    obtenerDatosPromise();
    // Llama a la función que utiliza async/await
    obtenerDatosAsync();
});

// Función que obtiene datos usando promesas
const obtenerDatosPromise = () => {
    // Realiza una petición a la URL con fetch
    fetch(url)
        // Cuando la respuesta llega, la convierte a JSON
        .then(response => response.json())
        // Cuando los datos JSON están listos, los imprime en la consola
        .then(data => console.log(data))
        // Si hay un error en cualquier punto, lo captura y lo imprime
        .catch(error => console.error(error));
};

// Función que obtiene datos usando async/await
const obtenerDatosAsync = async () => {
    try {
        // Realiza la petición a la URL y espera a que la respuesta llegue
        const response = await fetch(url);
        // Convierte la respuesta a JSON y espera a que termine
        const data = await response.json();
        // Imprime los datos en la consola
        console.log(data);
    } catch (error) {
        // Si hay un error, lo captura y lo imprime
        console.error(error);
    }
};
