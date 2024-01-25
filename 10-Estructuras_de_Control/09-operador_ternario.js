// Declaración de variables booleanas para usar en los ejemplos del operador ternario.
const autenticado = true; // Declara 'autenticado' como verdadero.
const puedePagar = false; // Declara 'puedePagar' como falso.

// Primer uso del operador ternario.
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');
/*
    ^ Se evalúa la condición 'autenticado'.
    Si es verdadera (lo es en este caso), imprime 'Si esta autenticado'.
    Si fuera falsa, imprimiría 'No esta autenticado'.
*/

// Segundo uso del operador ternario, combinando dos condiciones con '&&'.
console.log(autenticado && puedePagar ? 'Si, si puede pagar' : 'No, no esta autenticado');
// ^ Evalúa si 'autenticado' Y 'puedePagar' son ambos verdaderos.
// Como 'puedePagar' es falso, imprime 'No, no esta autenticado'.

// Tercer uso del operador ternario, combinando condiciones con '||'.
console.log(autenticado || puedePagar ? 'Si, si puede pagar' : 'No, no esta autenticado');
// ^ Evalúa si 'autenticado' O 'puedePagar' es verdadero.
// Como 'autenticado' es verdadero, imprime 'Si, si puede pagar'.

// Cuarto uso del operador ternario, anidando otro operador ternario.
console.log(autenticado ? puedePagar ? 'Si esta autentificado y puede pagar' : 'Si autenticado, pero no puede pagar' : 'No esta autenticado');
/*
    ^ Primer nivel: evalúa 'autenticado'.
    Si es verdadero (lo es), pasa al siguiente nivel.
    Segundo nivel: evalúa 'puedePagar'.
    Como es falso, imprime 'Si autenticado, pero no puede pagar'.
    Si 'autenticado' fuera falso, imprimiría 'No esta autenticado'.
*/
