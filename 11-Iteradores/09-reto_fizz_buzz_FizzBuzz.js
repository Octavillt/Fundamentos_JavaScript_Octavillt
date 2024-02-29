/*
El desafío "Fizz Buzz" es un problema común en entrevistas de programación y enseñanza de la lógica de programación.
Consiste en iterar sobre una serie de números y, dependiendo de si son divisibles por 3, 5 o ambos, imprimir un 
mensaje diferente. Este código sigue fielmente la lógica del desafío:

Imprime "FIZZ BUZZ" si el número es divisible por ambos, 3 y 5 (múltiplos de 15).
Imprime "fizz" si el número es solo divisible por 3.
Imprime "buzz" si el número es solo divisible por 5.
*/


// Fizz Buzz
for (let i = 1; i < 100; i++) { // Un bucle for que itera desde 1 hasta 99.
    if (i % 15 === 0) { // Primero, verifica si 'i' es divisible tanto por 3 como por 5.
        console.log(`${i} FIZZ BUZZ`); // Si es así, imprime 'i' seguido de "FIZZ BUZZ".
    } else if (i % 3 === 0) { // Luego, verifica si 'i' es solo divisible por 3.
        console.log(`${i} fizz`); // Si es así, imprime 'i' seguido de "fizz".
    } else if (i % 5 === 0) { // Luego, verifica si 'i' es solo divisible por 5.
        console.log(`${i} buzz`); // Si es así, imprime 'i' seguido de "buzz".
    }
    // Nota: No hay necesidad de un 'else' final, ya que no se imprime nada si 'i' no cumple ninguna condición.
}
