/*
Las instrucciones break y continue son muy útiles al trabajar con bucles en JavaScript,
como for, while, y do-while. Aquí te explico cada una de ellas:

break
Propósito: Se utiliza para "romper" o salir de un bucle antes de que se complete su condición normal.
Uso Común: Se usa en situaciones donde, una vez que se cumple una condición específica,
no hay necesidad de continuar con las iteraciones restantes del bucle.

*/
// Bucle for que se ejecuta desde 0 hasta 10.
for (let i = 0; i <= 10; i++) {
    if (i === 5) { // Verifica si i es igual a 5.
        console.log('Estamos en el 5... FIN.'); // Si i es 5, imprime un mensaje.
        break; // Rompe el bucle, es decir, termina su ejecución inmediatamente.
    }
    console.log(`Numero:  ${i} `); // Imprime el número actual de i.
}

/*
continue
Propósito: Se utiliza para saltar el resto del código en la iteración actual y continuar con la siguiente iteración del bucle.
Uso Común: Se usa cuando, bajo ciertas condiciones, no quieres que se ejecute el resto del código en la iteración actual del bucle,
pero aún deseas continuar con las iteraciones siguientes.
*/

// Otro bucle for que se ejecuta desde 0 hasta 10.
for (let i = 0; i <= 10; i++) {
    if (i === 5) { // Verifica si i es igual a 5.
        console.log('Estamos en el 5... CONTINUAR....'); // Si i es 5, imprime un mensaje.
        continue; // Salta el resto del código en la iteración actual y continúa con la siguiente.
    }
    console.log(`Numero:  ${i} `); // Imprime el número actual de i.
}

const carrito = [ // Un array de objetos representando un carrito de compras.
    { nombre: 'Monitor 20 Pulgadas', precio: 500, descuento: true },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300, descuento: true },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50, descuento: true },
    { nombre: 'Celular', precio: 500 },
]

for (let i = 0; i < carrito.length; i++) { // Bucle que recorre el array 'carrito'.
    if (carrito[i].descuento) { // Verifica si el objeto actual tiene un descuento.
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `); // Imprime un mensaje si hay descuento.
        continue; // Salta al siguiente ciclo del bucle.
    }
    console.log(carrito[i].nombre); // Imprime el nombre del producto.
}