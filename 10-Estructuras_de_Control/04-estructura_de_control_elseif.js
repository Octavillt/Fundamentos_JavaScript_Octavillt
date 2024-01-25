let dinero = 639; // Declara una variable 'dinero' con un valor numérico de 639.
let totalApagar = 333; // Declara una variable 'totalApagar' con un valor numérico de 333.
let tarjeta = true; // Declara una variable booleana 'tarjeta' y la inicializa como verdadera.
let cheque = false; // Declara una variable booleana 'cheque' y la inicializa como falsa.

// Utiliza una estructura de control 'if...else if...else' para realizar múltiples verificaciones.
if (dinero >= totalApagar) { // Primera condición: compara si 'dinero' es mayor o igual a 'totalApagar'.
    console.log("Si podemos pagar...!"); // Se ejecuta si la primera condición es verdadera.
} else if (tarjeta) { // Segunda condición: verifica si 'tarjeta' es verdadera.
    console.log("Si puedo pagar porque tengo tarjeta..."); // Se ejecuta si la segunda condición es verdadera.
} else if (cheque) { // Tercera condición: verifica si 'cheque' es verdadero.
    console.log("Si puedo pagar porque tengo cheque..."); // Se ejecuta si la tercera condición es verdadera.
} else { // Bloque 'else' que se ejecuta si ninguna de las condiciones anteriores es verdadera.
    console.log("Saldos Insuficientes...!"); // Se ejecuta si todas las condiciones anteriores son falsas.
}
