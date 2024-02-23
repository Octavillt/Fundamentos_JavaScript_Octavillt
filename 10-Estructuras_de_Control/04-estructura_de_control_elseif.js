// Estructura de control 'if...else if...else'

/*
La estructura de control 'if...else if...else' permite realizar múltiples verificaciones.
Se utiliza para evaluar una condición y, si esta es falsa, evaluar otra condición diferente.
La estructura 'else if' se puede utilizar tantas veces como sea necesario.
*/
// Declara una variable 'dinero' con un valor numérico de 639.
let dinero = 639;
// Declara una variable 'totalApagar' con un valor numérico de 333.
let totalApagar = 333;
// Declara una variable booleana 'tarjeta' y la inicializa como verdadera.
let tarjeta = true;
// Declara una variable booleana 'cheque' y la inicializa como falsa.
let cheque = false;

// Utiliza una estructura de control 'if...else if...else' para realizar múltiples verificaciones.
if (dinero >= totalApagar) { // Primera condición: compara si 'dinero' es mayor o igual a 'totalApagar'.
    // Se ejecuta si la primera condición es verdadera.
    console.log("Si podemos pagar...!"); // Si podemos pagar...!
} else if (tarjeta) { // Segunda condición: verifica si 'tarjeta' es verdadera.
    // Se ejecuta si la segunda condición es verdadera.
    console.log("Si puedo pagar porque tengo tarjeta..."); // No se cumple la condición.
} else if (cheque) { // Tercera condición: verifica si 'cheque' es verdadero.
    // Se ejecuta si la tercera condición es verdadera.
    console.log("Si puedo pagar porque tengo cheque..."); // No se cumple la condición.
} else { // Bloque 'else' que se ejecuta si ninguna de las condiciones anteriores es verdadera.
    // Se ejecuta si todas las condiciones anteriores son falsas.
    console.log("Saldos Insuficientes...!"); // No se cumple la condición.
}
