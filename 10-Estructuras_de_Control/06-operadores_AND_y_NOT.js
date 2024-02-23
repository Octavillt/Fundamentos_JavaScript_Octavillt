// Operedpres AND (&&) y NOT (!)

/*
AND (&&): 
El operador lógico AND (&&) se utiliza para combinar dos o más expresiones condicionales.
Devuelve verdadero si todas las expresiones son verdaderas.
Devuelve falso si al menos una de las expresiones es falsa.

NOT (!):
El operador lógico NOT (!) se utiliza para negar una expresión condicional.
Devuelve verdadero si la expresión es falsa.
Devuelve falso si la expresión es verdadera.
*/

// Declara una constante 'usuario' y asigna el valor booleano 'true'.
const usuario = true;
// Declara una constante 'puedePagar' y asigna el valor booleano 'false'.
const puedePagar = false;

// Primera estructura de control 'if...else' usando el operador '&&'.
if (usuario && puedePagar) { // Evalúa si 'usuario' Y 'puedePagar' son verdaderos.
    // Se ejecuta si ambas condiciones son verdaderas.
    console.log('Tu Pedido se realizo con éxito...'); // No se cumple la condición.
} else {
    // Se ejecuta si al menos una de las condiciones es falsa.
    console.log('Hubo un Error con tu pago...'); // Hubo un Error con tu pago...
}

// Segunda estructura de control 'if...else if...else' usando los operadores '&&' y '!'.
if (usuario && puedePagar) { // Evalúa de nuevo si 'usuario' Y 'puedePagar' son verdaderos.
    // Se ejecuta si ambas condiciones son verdaderas.
    console.log('Tu Pedido se realizo con éxito...'); // No se cumple la condición.
} else if (!puedePagar && !usuario) { // Evalúa si 'puedePagar' Y 'usuario' son ambos falsos.
    // Se ejecuta si ambas condiciones son falsas.
    console.log('No, no puedes comprar'); // No se cumple la condición.
} else if (!usuario) { // Evalúa si solo 'usuario' es falso.
    // Se ejecuta si 'usuario' es falso.
    console.log('Inicia sesión o registra tu cuenta'); // No se cumple la condición.
} else if (!puedePagar) { // Evalúa si solo 'puedePagar' es falso.
    // Se ejecuta si 'puedePagar' es falso.
    console.log('Fondos Insuficientes...'); // Fondos Insuficientes...
}
