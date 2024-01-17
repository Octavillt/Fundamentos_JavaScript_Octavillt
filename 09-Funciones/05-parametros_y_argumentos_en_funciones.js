// Ejemplo de Funciones con Parámetros y Argumentos en JavaScript

// Definición de una función 'sumar' con dos parámetros: 'a' y 'b'.
function sumar(a, b) {
    console.log(a + b); // Imprime la suma de 'a' y 'b'.
    // Aquí, 'a' y 'b' son parámetros de la función 'sumar'.
    // Los parámetros son variables que se utilizan para recibir valores cuando se llama a la función.
}
sumar(33, 69); // Llamada a la función 'sumar' con dos argumentos: 33 y 69.
// Los argumentos '33' y '69' se pasan a la función y se utilizan en lugar de 'a' y 'b'.

// Definición de una función 'saludar' con dos parámetros: 'nombre' y 'apellido'.
function saludar(nombre, apellido) {
    return `Hola ${nombre} ${apellido}`; // Retorna un saludo que incluye el nombre y el apellido.
    // Esta función utiliza los parámetros 'nombre' y 'apellido' para crear un saludo personalizado.
}
console.log(saludar('Octavio', 'Villafranco')); // Llamada a 'saludar' con 'Octavio' y 'Villafranco' como argumentos.
// Imprime un saludo personalizado para 'Octavio Villafranco'.

console.log(saludar('Israel')); // Llamada a 'saludar' solo con el argumento 'Israel'.
// Cuando se llama a 'saludar' con un solo argumento, el segundo parámetro ('apellido') es 'undefined'.
// Esto puede resultar en un saludo incompleto o incorrecto.
