// Inicializar el for, condición, Incremento

// Un bucle for que itera desde 0 hasta menos de 33.
for (let i = 0; i < 33; i++) {
    // Imprime el número actual del contador 'i'.
    console.log(`Numero:  ${i} `); // Numero: 0, Numero: 1, Numero: 2, ... Numero: 32
}

// Un bucle for que itera desde 0 hasta 33, incluyendo el 33.
for (let i = 0; i <= 33; i++) {
    // Similar al anterior, pero incluye el número 33 en la impresión.
    console.log(`Numero:  ${i} `); // Numero: 0, Numero: 1, Numero: 2, ... Numero: 33
}

// Un bucle for que itera desde 0 hasta 66, incluyendo el 66.
for (let i = 0; i <= 66; i++) {
    // Dentro del bucle, se utiliza una estructura if para verificar si 'i' es par o impar.
    if (i % 2 == 0) {
        // Imprime si 'i' es un número par.
        console.log(`Numero ${i} ES PAR `); // Numero 0 ES PAR, Numero 2 ES PAR, Numero 4 ES PAR, ... Numero 66 ES PAR
    } else {
        // Imprime si 'i' es un número impar.
        console.log(`Numero ${i} ES IMPAR `); // Numero 1 ES IMPAR, Numero 3 ES IMPAR, Numero 5 ES IMPAR, ... Numero 65 ES IMPAR
    }
}

// Declara un arreglo 'carrito' que contiene varios objetos con nombre y precio.
const carrito = [
    { nombre: 'Monitor 23 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

// Un bucle for que itera sobre cada elemento del arreglo 'carrito'.
for (let i = 0; i < carrito.length; i++) {
    // Imprime el nombre y precio de cada producto en el carrito.
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`); // Monitor 23 Pulgadas - 500, Televisión 50 Pulgadas - 700, ... Celular - 500
}
