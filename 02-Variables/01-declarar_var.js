// Variables con Var
var producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable llamada 'producto' con un valor de tipo string.

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas'; // Reasignación de la variable 'producto' con un nuevo valor string.
console.log(producto); // Muestra en consola el valor actual de 'producto', que es 'Monitor de 19 Pulgadas'.

var precio = 200; // Inicializamos una variable llamada 'precio' con un valor numérico.
console.log(precio); // Muestra en consola el valor de 'precio', que es 200.

// También se puede inicializar una Variable sin Valor y Asignarlo Después
var disponible; // Declaramos una variable llamada 'disponible' sin asignarle un valor inicial.
disponible = true; // Asignamos el valor booleano 'true' a la variable 'disponible'.

// Inicializar Múltiples Variables 
var categoria = 'Computadoras', // Declaramos una variable 'categoria' y le asignamos un string.
    marca = 'Marca Famosa', // Declaramos una variable 'marca' en la misma línea, lo cual es posible en JavaScript.
    calificacion = 5; // Declaramos una variable 'calificacion' y le asignamos un valor numérico.

// Muestra los valores de las variables en la consola.
console.log(categoria)
console.log(marca)
console.log(calificacion)

// Nomenclatura de variables
// var 99dias; // NO - Las variables no pueden comenzar con números.
var dias99; // SI - Esta es una nomenclatura válida para una variable.

var _01; // SI - Se pueden usar guiones bajos al principio de las variables.
// var 01_; // NO - Las variables no pueden comenzar con números.
