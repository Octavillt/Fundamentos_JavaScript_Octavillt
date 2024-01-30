// Inicializar el for, condición, Incremento

// Un bucle for que itera desde 0 hasta menos de 33.
for (let i = 0; i < 33; i++) {
    console.log(`Numero:  ${i} `); // Imprime el número actual del contador 'i'.
}

// Un bucle for que itera desde 0 hasta 33, incluyendo el 33.
for (let i = 0; i <= 33; i++) {
    console.log(`Numero:  ${i} `); // Similar al anterior, pero incluye el número 33 en la impresión.
}

// Un bucle for que itera desde 0 hasta 66, incluyendo el 66.
for (let i = 0; i <= 66; i++) {
    // Dentro del bucle, se utiliza una estructura if para verificar si 'i' es par o impar.
    if (i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `); // Imprime si 'i' es un número par.
    } else {
        console.log(`Numero ${i} ES IMPAR `); // Imprime si 'i' es un número impar.
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
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}
