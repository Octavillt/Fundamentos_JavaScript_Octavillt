// Funciones que retornan valores

// Ejemplo simple de una función que retorna un valor.
function sumar(a, b) {
    return a + b; // La función 'sumar' toma dos parámetros 'a' y 'b', y retorna su suma.
    // 'return' es la palabra clave que se utiliza para devolver un valor desde la función.
}
const resultado = sumar(1, 2); // Llamada a la función 'sumar' con los argumentos 1 y 2.
console.log(resultado); // Imprime el resultado de la función 'sumar', que es 3.
// Aquí, 'resultado' almacena el valor retornado por la función y luego se imprime en la consola.

// Ejemplo más complejo con múltiples funciones que interactúan entre sí.
let total = 0; // Variable 'total' para almacenar el total acumulado.

function agregarCarrito(precio) {
    return total += precio; // La función 'agregarCarrito' toma un precio y lo suma al total.
    // Retorna el nuevo total después de agregar el precio.
}

function calcularImpuesto(total) {
    return 1.15 * total; // La función 'calcularImpuesto' calcula el impuesto sobre el total.
    // Retorna el total incluyendo el impuesto.
}

// Llamadas sucesivas a 'agregarCarrito' para añadir diferentes precios al total.
total = agregarCarrito(369); // Añade 369 al total.
total = agregarCarrito(639); // Añade 639 al total.
total = agregarCarrito(936); // Añade 936 al total.
console.log(total); // Imprime el total acumulado.

// Cálculo del total a pagar incluyendo impuestos.
const totalPagar = calcularImpuesto(total);
// Llamada a 'calcularImpuesto' con el total acumulado para calcular el total a pagar.

console.log(`El total a pagar es de ${totalPagar}`);
// Imprime el total a pagar incluyendo impuestos, utilizando la función calcularImpuesto.
