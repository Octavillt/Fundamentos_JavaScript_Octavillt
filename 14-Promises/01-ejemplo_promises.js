// Creamos una nueva Promesa llamada 'aplicarDescuento'
const aplicarDescuento = new Promise((resolve, reject) => {
    // Definimos una variable 'descuento' que simula la existencia de un descuento
    const descuento = true;
    // Si hay descuento, resolvemos la promesa con un mensaje de éxito
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        // Si no hay descuento, rechazamos la promesa con un mensaje de error
        reject('No se puede aplicar el descuento');
    }
});

// Nota sobre los posibles estados de una promesa:
// - Pending: La promesa está pendiente (ni cumplida ni rechazada)
// - Fulfilled: La promesa se ha cumplido
// - Rejected: La promesa ha sido rechazada

// Manejo de la promesa 'aplicarDescuento' usando .then() y .catch()
aplicarDescuento.then(resultado => {
    // Si la promesa se cumple, imprimimos el resultado en la consola
    console.log(resultado);
}).catch(error => {
    // Si la promesa es rechazada, imprimimos el error en la consola
    console.error(error);
});

// Otra forma de manejar la promesa 'aplicarDescuento' usando .then() y .catch()
aplicarDescuento.then(resultado => {
    // Si la promesa se cumple, llamamos a la función 'descuento' con el resultado
    descuento(resultado);
}).catch(error => {
    // Si la promesa es rechazada, imprimimos el error en la consola
    console.error(error);
});

// Definimos la función 'descuento' que toma un mensaje y lo imprime en la consola
const descuento = mensaje => {
    console.log(mensaje);
};
