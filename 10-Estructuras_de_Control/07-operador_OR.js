// Operador OR (||)

/*
El operador OR (||) es un operador lógico que se utiliza para evaluar si al menos una de las condiciones es verdadera.
Devuelve verdadero si al menos una de las expresiones es verdadera.
Devuelve falso si todas las expresiones son falsas.
*/

// Declara una variable 'efectivo' con valor 333.
let efectivo = 333;
//  Declara una variable 'credito' con valor 963.
let credito = 963;
// Calcula y asigna a 'disponible' la suma de 'efectivo' y 'credito'.
let disponible = efectivo + credito;
// Declara una variable 'totalApagar' con valor 639.
let totalApagar = 639;

/*
Utiliza una estructura de control 'if...else' con el operador lógico 'OR' (||).
Evalúa si alguna de las siguientes condiciones es verdadera:
1. 'efectivo' es mayor que 'totalApagar'.
2. 'credito' es mayor que 'totalApagar'.
3. 'disponible' (la suma de 'efectivo' y 'credito') es mayor que 'totalApagar'.
*/
if (efectivo > totalApagar || credito > totalApagar || disponible > totalApagar) {
    // Si alguna condición es verdadera, muestra este mensaje.
    console.log('Si, si puedes pagar...!'); // Si, si puedes pagar...!
} else {
    // Si ninguna condición es verdadera, muestra este mensaje.
    console.log("Fondos Insuficientes..."); // No se cumple la condición.
}
