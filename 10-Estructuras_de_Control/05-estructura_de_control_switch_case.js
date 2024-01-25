const metodoPago = 'efectivo'; // Declara una constante 'metodoPago' y asigna el valor 'efectivo'.
// const metodoPago = 'cheque'; // Línea comentada para otro posible valor de 'metodoPago'.
// const metodoPago = 'tarjeta'; // Otra línea comentada para un valor alternativo de 'metodoPago'.

// Inicia una estructura de control 'switch' para manejar diferentes casos basados en 'metodoPago'.
switch (metodoPago) {
    case 'efectivo': // Primer caso: si 'metodoPago' es 'efectivo'.
        pagar(); // Llama a la función 'pagar'.
        break; // Termina la ejecución del 'switch' para este caso.

    case 'cheque': // Segundo caso: si 'metodoPago' es 'cheque'.
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`); // Imprime un mensaje específico para 'cheque'.
        break; // Termina la ejecución del 'switch' para este caso.

    case 'tarjeta': // Tercer caso: si 'metodoPago' es 'tarjeta'.
        console.log(`Pagaste con ${metodoPago} espere un momento...`); // Imprime un mensaje específico para 'tarjeta'.
        break; // Termina la ejecución del 'switch' para este caso.

    default: // Caso por defecto: si 'metodoPago' no coincide con los casos anteriores.
        console.log('Aún no has pagado'); // Imprime un mensaje por defecto.
        break; // Termina la ejecución del 'switch'.
}

// Define la función 'pagar'.
function pagar() {
    console.log(`Pagaste con ${metodoPago}`); // Imprime un mensaje indicando que el pago se realizó con el método especificado.
}
