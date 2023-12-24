// Declaración de Variables con Let
let producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable 'producto' con un valor string.

// Reasignación de Variables
// Las variables declaradas con 'let' también se pueden reasignar.
producto = 'Monitor de 19 Pulgadas'; // Reasignamos 'producto' a un nuevo valor string.
producto = 20; // Reasignamos 'producto' a un valor numérico.
producto = true; // Reasignamos 'producto' a un valor booleano.
producto = null; // Reasignamos 'producto' a un valor nulo.

console.log(producto); // Muestra en consola el valor actual de 'producto', que es null.

// Declaración de Variables Numéricas con Let
let precio = 200; // Inicializamos una variable 'precio' con un valor numérico.
console.log(precio); // Muestra en consola el valor de 'precio', que es 200.

// Declaración de Variables sin Valor Inicial
// También se puede inicializar una variable sin valor y asignarlo después.
let disponible; // Declaramos una variable 'disponible' sin valor inicial.
disponible = true; // Asignamos el valor booleano 'true' a 'disponible'.

// Inicialización de Múltiples Variables
let categoria = 'Computadoras', // Declaramos 'categoria' y asignamos un string.
    marca = 'Marca Famosa', // Declaramos 'marca' en la misma línea.
    calificacion = 5; // Declaramos 'calificacion' y le asignamos un valor numérico.

// Muestra los valores de las variables en la consola.
console.log(categoria);
console.log(marca);
console.log(calificacion);

// Nomenclatura de Variables
// let 99dias; // NO - Las variables no pueden comenzar con números.
let dias99; // SI - Esta es una nomenclatura válida.

let _01; // SI - Se pueden usar guiones bajos al principio.
// let 01_; // NO - Las variables no pueden comenzar con números.
