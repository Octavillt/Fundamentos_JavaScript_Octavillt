// Esterctura de control - Operador Ternario
/*
El operador ternario es una estructura de control que permite tomar decisiones basadas en una condición.
Es una forma abreviada de escribir una estructura 'if...else'. -> (condición) ? verdadero : falso;
*/


// Declaración de variables booleanas para usar en los ejemplos del operador ternario.
const autenticado = true; // Declara 'autenticado' como verdadero.
const puedePagar = false; // Declara 'puedePagar' como falso.


/*
Primer uso del operador ternario.
Se evalúa la condición 'autenticado'.
Si es verdadera (lo es en este caso), imprime 'Si esta autenticado'.
Si fuera falsa, imprimiría 'No esta autenticado'.
*/
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado'); // Si esta autenticado


/*
Segundo uso del operador ternario, combinando dos condiciones con '&&'.
Evalúa si 'autenticado' Y 'puedePagar' son ambos verdaderos.
Como 'puedePagar' es falso, imprime 'No, no esta autenticado'.
*/
console.log(autenticado && puedePagar ? 'Si, si puede pagar' : 'No, no esta autenticado'); // No, no esta autenticado


/*
Tercer uso del operador ternario, combinando condiciones con '||'.
Evalúa si 'autenticado' O 'puedePagar' es verdadero.
Como 'autenticado' es verdadero, imprime 'Si, si puede pagar'.
*/
console.log(autenticado || puedePagar ? 'Si, si puede pagar' : 'No, no esta autenticado'); // Si, si puede pagar


/*
Cuarto uso del operador ternario, anidando otro operador ternario.
Primer nivel: evalúa 'autenticado'.
Si es verdadero (lo es), pasa al siguiente nivel.
Segundo nivel: evalúa 'puedePagar'.
Como es falso, imprime 'Si autenticado, pero no puede pagar'.
Si 'autenticado' fuera falso, imprimiría 'No esta autenticado'.
*/
console.log(autenticado ? puedePagar ? 'Si esta autentificado y puede pagar' : 'Si autenticado, pero no puede pagar' : 'No esta autenticado'); // Si autenticado, pero no puede pagar