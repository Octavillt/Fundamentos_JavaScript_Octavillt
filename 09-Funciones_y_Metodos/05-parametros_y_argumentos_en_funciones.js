// Diferencias entre Parámetros y Argumentos
/*
Parámetros:
Son las variables que se definen en la declaración de una función. Actúan como marcadores 
de posición para los valores que se pasarán a la función cuando se llame. En tu código, a, b, nombre
y apellido son parámetros.

Argumentos:
Argumentos, por otro lado, son los valores reales que se pasan a la función cuando se llama. En tu código, 
cuando llamas a la función sumar(33, 69), 33 y 69 son los argumentos. De manera similar, cuando llamas a 
saludar('Octavio', 'Villafranco'), 'Octavio' y 'Villafranco' son los argumentos.
*/

// Ejemplo de Funciones con Parámetros y Argumentos en JavaScript

// Definición de una función 'sumar' con dos parámetros: 'a' y 'b'.
function sumar(a, b) {
    console.log(a + b); // Imprime la suma de 'a' y 'b'.
    // Aquí, 'a' y 'b' son parámetros de la función 'sumar'.
    // Los parámetros son variables que se utilizan para recibir valores cuando se llama a la función.
}
// Llamada a la función 'sumar' con dos argumentos: 33 y 69.
// Los argumentos '33' y '69' se pasan a la función y se utilizan en lugar de 'a' y 'b'.
sumar(33, 69);

// Definición de una función 'saludar' con dos parámetros: 'nombre' y 'apellido'.
function saludar(nombre, apellido) {
    // Retorna un saludo que incluye el nombre y el apellido.
    // Esta función utiliza los parámetros 'nombre' y 'apellido' para crear un saludo personalizado.
    return `Hola ${nombre} ${apellido}`;
}
// Llamada a 'saludar' con 'Octavio' y 'Villafranco' como argumentos.
// Imprime un saludo personalizado para 'Octavio Villafranco'.
console.log(saludar('Octavio', 'Villafranco'));

/*
Llamada a 'saludar' solo con el argumento 'Israel'.
Cuando se llama a 'saludar' con un solo argumento, el segundo parámetro ('apellido') es 'undefined'.
Esto puede resultar en un saludo incompleto o incorrecto.
*/
console.log(saludar('Israel')); 
