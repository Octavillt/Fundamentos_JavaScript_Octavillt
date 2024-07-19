// Función que simula la descarga de un nuevo cliente
const descargaNuevoCliente = () => {
    // Retorna una promesa que se resuelve después de un tiempo
    return new Promise(resolve => {
        console.log('Descargando cliente... espere...');
        // Simula una operación asincrónica con un retraso de 3969 ms
        setTimeout(() => {
            resolve('Cliente descargado');
        }, 3969);
    });
};

// Función que simula la descarga de un nuevo pedido
const descargaNuevoPedido = () => {
    // Retorna una promesa que se resuelve después de un tiempo
    return new Promise(resolve => {
        console.log('Descargando pedido... espere...');
        // Simula una operación asincrónica con un retraso de 3000 ms
        setTimeout(() => {
            resolve('Pedido descargado');
        }, 3000);
    });
};

// Función asíncrona que utiliza await de forma secuencial
async function app1() {
    try {
        // Espera a que se descargue el cliente antes de continuar
        const cliente = await descargaNuevoCliente();
        console.log(cliente);

        // Después de descargar el cliente, espera a que se descargue el pedido
        const pedido = await descargaNuevoPedido();
        console.log(pedido);
    } catch (error) {
        // Captura e imprime cualquier error que ocurra durante las descargas
        console.error(error);
    }
};

// Función asíncrona que utiliza Promise.all para realizar descargas en paralelo
const app = async () => {
    try {
        // Inicia la descarga del cliente
        const cliente = descargaNuevoCliente();
        // Inicia la descarga del pedido
        const pedido = descargaNuevoPedido();

        // Espera a que ambas promesas se resuelvan utilizando Promise.all
        const resultado = await Promise.all([cliente, pedido]);

        // Imprime el resultado de la descarga del cliente
        console.log(resultado[0]);
        // Imprime el resultado de la descarga del pedido
        console.log(resultado[1]);
    } catch (error) {
        // Captura e imprime cualquier error que ocurra durante las descargas
        console.error(error);
    }
};

// Llama a la función app1 para iniciar la descarga secuencial
app1();
// Llama a la función app para iniciar la descarga en paralelo
app();
