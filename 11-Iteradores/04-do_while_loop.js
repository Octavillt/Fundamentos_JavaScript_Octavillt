let i = 0; // Inicializa la variable 'i' con el valor 0.

do {
    // Imprime el valor actual de 'i'.
    console.log(`Numero: ${i}`); // Numero: 0, Numero: 1, Numero: 2, ... Numero: 9
    i++; // Incrementa 'i' en 1.
} while (i < 10); // La condición del bucle se verifica después de ejecutar el bloque de código.


let opcion;
do {
    opcion = prompt("Ingresa un número (1 para continuar, 2 para salir):"); // Solicita al usuario ingresar una opción.
    if (opcion === '1') {
        // Si el usuario ingresa 1, continúa.
        console.log("Continuando el proceso...");
    } else if (opcion === '2') {
        // Si el usuario ingresa 2, prepara para salir.
        console.log("Saliendo del proceso...");
    } else {
        // Para cualquier otra entrada, indica que no es válida.
        console.log("Opción no válida. Intente nuevamente.");
    }
} while (opcion !== '2'); // El bucle se repite hasta que el usuario ingresa 2 para salir.
