// Estructura de control 'switch', 'case' y 'default'.

/*
La estructura de control 'switch' permite evaluar una expresión y compararla con diferentes casos.
La estructura 'case' se utiliza para definir los diferentes casos que se pueden comparar.
La estructura 'default' se utiliza para definir un caso por defecto si no se cumple ninguno de los casos anteriores.
*/

// Declara una constante 'metodoPago' y asigna el valor 'efectivo'.
const metodoPago = 'efectivo';
// Línea comentada para otro posible valor de 'metodoPago'.
// const metodoPago = 'cheque';
// Otra línea comentada para un valor alternativo de 'metodoPago'.
// const metodoPago = 'tarjeta'; 

// Inicia una estructura de control 'switch' para manejar diferentes casos basados en 'metodoPago'.
switch (metodoPago) {
    case 'efectivo': // Primer caso: si 'metodoPago' es 'efectivo'.
        // Llama a la función 'pagar'.
        pagar();
        break; // Termina la ejecución del 'switch' para este caso.

    case 'cheque': // Segundo caso: si 'metodoPago' es 'cheque'.
        // Imprime un mensaje específico para 'cheque'.
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`); // No se cumple la condición.
        break; // Termina la ejecución del 'switch' para este caso.

    case 'tarjeta': // Tercer caso: si 'metodoPago' es 'tarjeta'.
        // Imprime un mensaje específico para 'tarjeta'.
        console.log(`Pagaste con ${metodoPago} espere un momento...`); // No se cumple la condición.
        break; // Termina la ejecución del 'switch' para este caso.

    default: // Caso por defecto: si 'metodoPago' no coincide con los casos anteriores.
        // Imprime un mensaje por defecto.    
        console.log('Aún no has pagado'); // No se cumple la condición.
        break; // Termina la ejecución del 'switch'.
}

// Define la función 'pagar'.
function pagar() {
    // Imprime un mensaje indicando que el pago se realizó con el método especificado.
    console.log(`Pagaste con ${metodoPago}`); // Pagaste con efectivo
}
