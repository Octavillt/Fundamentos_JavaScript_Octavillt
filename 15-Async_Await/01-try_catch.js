console.log(3 + 3);
// Se imprime el resultado de la suma 3 + 3, que es 6.

try {
    // Se intenta ejecutar la función hola(). 
    hola();
    // Si la función no está definida o causa un error, se lanzará una excepción.
} catch (error) {
    // Si ocurre un error en el bloque try, se captura aquí en el bloque catch. 
    console.error(error);
    // Se imprime el error en la consola usando console.error.
}

// Se imprime el resultado de la suma 3 + 6, que es 9.
console.log(3 + 6);
