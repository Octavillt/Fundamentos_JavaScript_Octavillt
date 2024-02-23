// Operadores Mayor que y Menor que
/*
Los operadores de comparación mayor que (>) y menor que (<) se utilizan para comparar dos valores.
El operador mayor que (>) devuelve verdadero si el operando de la izquierda es mayor que el operando de la derecha.
El operador menor que (<) devuelve verdadero si el operando de la izquierda es menor que el operando de la derecha.
*/

// Declara una variable 'dinero' con el valor 639.
let dinero = 639;
// Declara una variable 'totalCarrito' con el valor 333.
let totalCarrito = 333;

// Utiliza el operador '>' para comparar si 'dinero' es mayor que 'totalCarrito'.
if (dinero > totalCarrito) {
    // Se ejecuta si 'dinero' es mayor.
    console.log('Pago Correcto');
} else {
    // Se ejecuta si 'dinero' no es mayor.
    console.log('Fondos Insuficientes');
}

// Declara una segunda variable 'dinero2' con el valor 693.
let dinero2 = 693;
// Declara una segunda variable 'totalCarrito2' con el mismo valor 333.
let totalCarrito2 = 333;

// Utiliza el operador '<' para comparar si 'dinero2' es menor que 'totalCarrito2'.
if (dinero2 < totalCarrito2)
    // Se ejecuta si 'dinero2' es menor.
    console.log('Fondos Insuficientes');
else
    // Se ejecuta si 'dinero2' no es menor.
    console.log('Pago Correcto');
// Declara una tercera variable 'dinero3' con el valor 936.
let dinero3 = 936;
// Declara una tercera variable 'totalCarrito3' con el valor 369.
let totalCarrito3 = 369;

// Utiliza el operador '>=' para comparar si 'dinero3' es mayor o igual que 'totalCarrito3'.
if (dinero3 >= totalCarrito3)
    // Se ejecuta si 'dinero3' es mayor o igual.
    console.log('Pago Correcto');
else
    // Se ejecuta si 'dinero3' es menor.
    console.log('Fondos Insuficientes');

// Declara una cuarta variable 'dinero4' con el valor 963.
let dinero4 = 963;
// Declara una cuarta variable 'totalCarrito4' con el valor 396.
let totalCarrito4 = 396;

// Utiliza el operador '<=' para comparar si 'dinero4' es menor o igual que 'totalCarrito4'.
if (dinero4 <= totalCarrito4) {
    // Se ejecuta si 'dinero4' es menor o igual.
    console.log('Fondos Insuficientes');
} else {
    // Se ejecuta si 'dinero4' es mayor.
    console.log('Pago Correcto');
}
