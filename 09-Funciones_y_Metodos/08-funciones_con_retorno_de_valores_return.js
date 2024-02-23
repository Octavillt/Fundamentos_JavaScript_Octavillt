// Funciones que retornan valores

// Ejemplo simple de una función que retorna un valor.

// La función 'sumar' toma dos parámetros 'a' y 'b', y retorna su suma.
// 'return' es la palabra clave que se utiliza para devolver un valor desde la función.
function sumar(a, b) {
    return a + b;
}
// Llamada a la función 'sumar' con los argumentos 1 y 2.
const resultado = sumar(1, 2);
// Imprime el resultado de la función 'sumar', que es 3.
// Aquí, 'resultado' almacena el valor retornado por la función y luego se imprime en la consola.
console.log(resultado);

// Ejemplo más complejo con múltiples funciones que interactúan entre sí.
// Variable 'total' para almacenar el total acumulado.
let total = 0;

// La función 'agregarCarrito' toma un precio y lo suma al total.
// Retorna el nuevo total después de agregar el precio.
function agregarCarrito(precio) {
    return total += precio;
}

// La función 'calcularImpuesto' calcula el impuesto sobre el total.
// Retorna el total incluyendo el impuesto.
function calcularImpuesto(total) {
    return 1.15 * total;
}

// Llamadas sucesivas a 'agregarCarrito' para añadir diferentes precios al total.
// Añade 369 al total.
total = agregarCarrito(369);
// Imprime el total acumulado.
console.log(total); // 369

// Añade 639 al total.
total = agregarCarrito(639);
// Imprime el total acumulado.
console.log(total); // 1008

// Añade 936 al total.
total = agregarCarrito(936);
// Imprime el total acumulado.
console.log(total); // 1944

// Cálculo del total a pagar incluyendo impuestos.
// Llamada a 'calcularImpuesto' con el total acumulado para calcular el total a pagar.
const totalPagar = calcularImpuesto(total);

// Imprime el total a pagar incluyendo impuestos, utilizando la función calcularImpuesto.
console.log(`El total a pagar es de ${totalPagar}`); // El total a pagar es de 2235.6
