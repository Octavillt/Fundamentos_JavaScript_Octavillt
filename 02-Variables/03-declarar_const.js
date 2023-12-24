// Declaración de Variables con const

// Primero una Variable con const su Valor NO Puede ser re-asignado:
const producto = 'Monitor 30 Pulgadas'; // Inicializamos una constante 'producto' con un valor string.
console.log(producto); // Muestra en consola el valor de 'producto', que es 'Monitor 30 Pulgadas'.

// La siguiente línea causará un error ya que no se puede reasignar una constante.
// producto = 'Monitor 23 Pulgadas'; // Intento de reasignar 'producto', lo cual no es permitido con 'const'.

// La siguiente línea también causará un error ya que las constantes deben ser inicializadas al momento de su declaración.
// Por otro lado, las Variables con const, deben Iniciarse con un Valor:
// const precio; // No está Inicializada con un Valor
// precio = 20; // Intento de asignar un valor a 'precio' después de su declaración.
// console.log(precio); // Esta línea no se ejecutará debido al error anterior.
