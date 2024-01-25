let efectivo = 333; // Declara una variable 'efectivo' con valor 333.
let credito = 963; // Declara una variable 'credito' con valor 963.
let disponible = efectivo + credito; // Calcula y asigna a 'disponible' la suma de 'efectivo' y 'credito'.
let totalApagar = 639; // Declara una variable 'totalApagar' con valor 639.

// Utiliza una estructura de control 'if...else' con el operador lógico 'OR' (||).
if (efectivo > totalApagar || credito > totalApagar || disponible > totalApagar) {
    // Evalúa si alguna de las siguientes condiciones es verdadera:
    // 1. 'efectivo' es mayor que 'totalApagar'.
    // 2. 'credito' es mayor que 'totalApagar'.
    // 3. 'disponible' (la suma de 'efectivo' y 'credito') es mayor que 'totalApagar'.
    console.log('Si, si puedes pagar...!'); // Si alguna condición es verdadera, muestra este mensaje.
} else {
    console.log("Fondos Insuficientes..."); // Si ninguna condición es verdadera, muestra este mensaje.
}
