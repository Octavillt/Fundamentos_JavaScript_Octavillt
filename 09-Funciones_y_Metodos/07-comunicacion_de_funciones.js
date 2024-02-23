// Ejemplo de Comunicación entre Funciones en JavaScript

/*
Este código demuestra cómo las funciones pueden interactuar y llamarse entre sí, creando un flujo de control.
Cada función realiza su tarea y luego pasa el control a otra función.
Esta es una técnica común en JavaScript para estructurar la lógica de la aplicación en funciones manejables
y reutilizables.
*/

// Llamada inicial a la función 'iniciarApp'.
iniciarApp();

// Definición de la función 'iniciarApp'.
function iniciarApp() {
    // Esta línea imprime un mensaje indicando que la aplicación se está iniciando.
    console.log('Iniciando App...'); // Iniciando App...

    // Llama a la función 'segundaFuncion'.
    // Después de imprimir el mensaje, 'iniciarApp' llama a 'segundaFuncion'.
    segundaFuncion();
}

// Definición de la función 'segundaFuncion'.
function segundaFuncion() {
    // Imprime un mensaje indicando que se está ejecutando desde la 'segundaFuncion'.
    console.log('Desde la segunda función...'); // Desde la segunda función...

    // Llama a 'usuarioAutenticado' con el argumento 'Octavio'.
    // Luego de imprimir su mensaje, 'segundaFuncion' llama a 'usuarioAutenticado', pasándole un nombre de usuario.
    usuarioAutenticado('Octavio');
}

// Definición de la función 'usuarioAutenticado'.
function usuarioAutenticado(usuario) {
    // Imprime un mensaje sobre el proceso de autenticación.
    console.log('Autenticando usuario...'); // Autenticando usuario...

    // Imprime un mensaje indicando que el usuario ha sido autenticado exitosamente.
    // Utiliza el parámetro 'usuario' para personalizar el mensaje.
    console.log(`Usuario autenticado con éxito ${usuario} `); // Usuario autenticado con éxito Octavio
}