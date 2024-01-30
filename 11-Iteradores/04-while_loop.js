let i = 0; // Inicializa una variable 'i' con el valor 0.

// Inicia un bucle while que se ejecuta mientras 'i' sea menor que 10.
while (i < 10) { // Condición del bucle.
    console.log(`Numero: ${i}`); // Imprime el valor actual de 'i'.
    i++; // Incrementa 'i' en 1 en cada iteración.
}


let numero = 1; // Inicializa 'numero' en 1.

// Bucle while para encontrar el primer número mayor que 1 que sea divisible por 5.
while (true) { // Bucle infinito, se romperá internamente.
    if (numero % 5 === 0) { // Verifica si 'numero' es divisible por 5.
        console.log(`El primer número divisible por 5 es: ${numero}`); // Imprime el número.
        break; // Rompe el bucle al encontrar el número.
    }
    numero++; // Incrementa 'numero' en 1 en cada iteración.
}
