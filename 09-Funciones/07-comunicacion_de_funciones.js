// Ejemplo de Comunicación entre Funciones en JavaScript

// Llamada inicial a la función 'iniciarApp'.
iniciarApp();

// Definición de la función 'iniciarApp'.
function iniciarApp() {
    console.log('Iniciando App...');
    // Esta línea imprime un mensaje indicando que la aplicación se está iniciando.

    segundaFuncion(); // Llama a la función 'segundaFuncion'.
    // Después de imprimir el mensaje, 'iniciarApp' llama a 'segundaFuncion'.
}

// Definición de la función 'segundaFuncion'.
function segundaFuncion() {
    console.log('Desde la segunda función...');
    // Imprime un mensaje indicando que se está ejecutando desde la 'segundaFuncion'.

    usuarioAutenticado('Octavio'); // Llama a 'usuarioAutenticado' con el argumento 'Octavio'.
    // Luego de imprimir su mensaje, 'segundaFuncion' llama a 'usuarioAutenticado', pasándole un nombre de usuario.
}

// Definición de la función 'usuarioAutenticado'.
function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    // Imprime un mensaje sobre el proceso de autenticación.

    console.log(`Usuario autenticado con éxito ${usuario} `);
    // Imprime un mensaje indicando que el usuario ha sido autenticado exitosamente.
    // Utiliza el parámetro 'usuario' para personalizar el mensaje.
}

/*
    Este código demuestra cómo las funciones pueden interactuar y llamarse entre sí, creando un flujo de control.
    Cada función realiza su tarea y luego pasa el control a otra función.
    Esta es una técnica común en JavaScript para estructurar la lógica de la aplicación en funciones manejables
    y reutilizables.
*/