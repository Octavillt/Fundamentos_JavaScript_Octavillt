let i = 0; // Inicializa la variable 'i' con el valor 0.

do {
    console.log(`Numero: ${i}`); // Imprime el valor actual de 'i'.
    i++; // Incrementa 'i' en 1.
} while (i < 10); // La condición del bucle se verifica después de ejecutar el bloque de código.


let opcion;
do {
    opcion = prompt("Ingresa un número (1 para continuar, 2 para salir):"); // Solicita al usuario ingresar una opción.
    if (opcion === '1') {
        console.log("Continuando el proceso..."); // Si el usuario ingresa 1, continúa.
    } else if (opcion === '2') {
        console.log("Saliendo del proceso..."); // Si el usuario ingresa 2, prepara para salir.
    } else {
        console.log("Opción no válida. Intente nuevamente."); // Para cualquier otra entrada, indica que no es válida.
    }
} while (opcion !== '2'); // El bucle se repite hasta que el usuario ingresa 2 para salir.
