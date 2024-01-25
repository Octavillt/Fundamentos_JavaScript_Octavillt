const usuario = true; // Declara una constante 'usuario' y asigna el valor booleano 'true'.
const puedePagar = false; // Declara una constante 'puedePagar' y asigna el valor booleano 'false'.

// Primera estructura de control 'if...else' usando el operador '&&'.
if (usuario && puedePagar) { // Evalúa si 'usuario' Y 'puedePagar' son verdaderos.
    console.log('Tu Pedido se realizo con éxito...'); // Se ejecuta si ambas condiciones son verdaderas.
} else {
    console.log('Hubo un Error con tu pago...') // Se ejecuta si al menos una de las condiciones es falsa.
}

// Segunda estructura de control 'if...else if...else' usando los operadores '&&' y '!'.
if (usuario && puedePagar) { // Evalúa de nuevo si 'usuario' Y 'puedePagar' son verdaderos.
    console.log('Tu Pedido se realizo con éxito...'); // Se ejecuta si ambas condiciones son verdaderas.
} else if (!puedePagar && !usuario) { // Evalúa si 'puedePagar' Y 'usuario' son ambos falsos.
    console.log('No, no puedes comprar'); // Se ejecuta si ambas condiciones son falsas.
} else if (!usuario) { // Evalúa si solo 'usuario' es falso.
    console.log('Inicia sesión o registra tu cuenta'); // Se ejecuta si 'usuario' es falso.
} else if (!puedePagar) { // Evalúa si solo 'puedePagar' es falso.
    console.log('Fondos Insuficientes...'); // Se ejecuta si 'puedePagar' es falso.
}
