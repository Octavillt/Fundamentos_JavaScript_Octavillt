const descargarUsuarios = () => {
    return new Promise((resolve, reject) => {
        // Simula una condición de error, puedes cambiarla a true para probar el manejo de errores
        const error = false;

        setTimeout(() => {
            // Si no hay error, la promesa se resuelve con el mensaje 'Descarga exitosa'.
            if (!error) {
                resolve('Descarga exitosa');
            } else {
                // Si hay error, la promesa se rechaza con el mensaje 'Hubo un error en la descarga...'.
                reject('Hubo un error en la descarga...');
            }
            // Simula un retraso de 3 segundos para la operación asincrónica.
        }, 3000);
    });
};

// Async Await

// Declaración de una función asíncrona usando async
async function ejecutar() {
    try {
        // Mensaje que se imprime antes de la espera de la promesa.
        console.log('Antes del await...');

        // await detiene la ejecución hasta que la promesa se resuelva o se rechace.
        const respuesta = await descargarUsuarios();

        // Mensaje que se imprime después de que la promesa se ha resuelto.
        console.log('Después del await...');

        // Imprime el resultado exitoso de la descarga.
        console.log(`Descarga exitosa: ${respuesta}`);

    } catch (error) {
        // Captura e imprime cualquier error que ocurra durante la ejecución de la promesa.
        console.error(error);
    }
};

// Expresión de función asíncrona usando async
const ejecutar = async () => {
    try {
        // Mensaje que se imprime antes de la espera de la promesa.
        console.log('Antes del await...');

        // await detiene la ejecución hasta que la promesa se resuelva o se rechace.
        const respuesta = await descargarUsuarios();

        // Mensaje que se imprime después de que la promesa se ha resuelto.
        console.log('Después del await...');

        // Imprime el resultado exitoso de la descarga.
        console.log(`Descarga exitosa: ${respuesta}`);
    } catch (error) {
        // Captura e imprime cualquier error que ocurra durante la ejecución de la promesa.
        console.error(error);
    }
};

// Llama a la función ejecutar para iniciar el proceso asincrónico.
ejecutar();
