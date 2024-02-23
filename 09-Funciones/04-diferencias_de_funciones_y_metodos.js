/*
Explicación detallada de las diferencias entre funciones y métodos en JavaScript:

- Funciones en JavaScript, como 'parseInt', son llamadas de forma independiente y pueden ser globales o definidas por el usuario.
- Métodos, como 'toString', son funciones que forman parte de un objeto y se llaman en el contexto de ese objeto.
- La principal diferencia es que los métodos están asociados con objetos y se accede a ellos a través de estos objetos.
- Las funciones son entidades independientes que pueden ser llamadas directamente sin un objeto asociado.
*/

// Ejemplo para ilustrar las diferencias entre funciones y métodos en JavaScript.

// Declaración de dos variables con diferentes tipos de datos.

// 'numero1' es una variable que almacena un número.
const numero1 = 20;

// 'numero2' es una variable que almacena una cadena de texto que representa un número.
const numero2 = "20";

/*
Uso de una función incorporada de JavaScript: parseInt.
'parseInt' es una función que convierte una cadena a un número entero.
En este caso, convierte la cadena 'numero2' en un número.
'parseInt' es un ejemplo de una función global de JavaScript que no está asociada a un objeto específico.
*/
console.log(parseInt(numero2)); // 20

/*
Uso de un método de un objeto en JavaScript: toString.
'toString' es un método que convierte un número a una cadena de texto.
Aquí, se llama al método 'toString' en la variable 'numero1', que es de tipo número.
'toString' es un ejemplo de un método, que es una función asociada a un objeto (en este caso, el objeto número 'numero1').
*/
console.log(numero1.toString()); // "20"