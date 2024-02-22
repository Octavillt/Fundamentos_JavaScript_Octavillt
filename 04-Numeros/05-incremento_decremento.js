// Incluir incremento por 1 y menos 1
let puntaje = 5; // Declaramos una variable 'puntaje' y le asignamos el valor inicial de 5.

// Incrementar de 1 en 1
puntaje++;
/* 'puntaje++' incrementa el valor de 'puntaje' en 1. Después de esta línea, 'puntaje' será 6.
   Este es un incremento postfijo, lo que significa que primero se devuelve el valor actual y luego se incrementa. */
console.log(puntaje); // 6

// Decrementar de 1 en 1
puntaje--;
/* 'puntaje--' decrementa el valor de 'puntaje' en 1. Después de esta línea, 'puntaje' vuelve a ser 5.
   Este es un decremento postfijo, similar al incremento postfijo. */
console.log(puntaje); // 5

// Incrementar de 1 en 1 desde el Inicio
++puntaje;
/* '++puntaje' es un incremento prefijo. Primero incrementa 'puntaje' en 1 y luego devuelve el valor. Ahora 'puntaje' es 6. */
console.log(puntaje); // 6

// Decrementar de 1 en 1 desde el Inicio
--puntaje;
/* '--puntaje' es un decremento prefijo. Primero decrementa 'puntaje' en 1 y luego devuelve el valor. 'Puntaje' vuelve a ser 5. */
console.log(puntaje); // 5

// Incrementar de 3 en 3 desde el Inicio
puntaje += 3;
/* 'puntaje += 3' incrementa 'puntaje' en 3. Esto es equivalente a 'puntaje = puntaje + 3'. Ahora 'puntaje' es 8. */
console.log(puntaje); // 8

// Decrementar de 3 en 3 desde el Inicio
puntaje -= 3;
/* 'puntaje -= 3' decrementa 'puntaje' en 3. Esto es equivalente a 'puntaje = puntaje - 3'. Ahora 'puntaje' es 5. */
console.log(puntaje); // 5
