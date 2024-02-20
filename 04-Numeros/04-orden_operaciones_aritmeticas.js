// El Orden en que se Ejecutan las Operaciones en JavaScript es Igual que en la Escuela
let resultado;

// El orden de las operaciones
resultado = 20 + 30 * 2;
// Primero se realiza la multiplicación (30 * 2 = 60), luego la suma (20 + 60). Resultado: 80.
console.log(resultado); // 80

resultado = (20 + 30) * 2;
// El uso de paréntesis cambia el orden. Primero se suma (20 + 30 = 50), luego se multiplica (50 * 2). Resultado: 100.
console.log(resultado); // 100

// 20% De Descuento en un Carrito de Compra.
resultado = (20 + 10 + 30 + 40 + 50) * .20;
// Primero se suma el total del carrito (20 + 10 + 30 + 40 + 50 = 150), luego se calcula el 20% de descuento (150 * 0.20). Resultado: 30.
console.log(resultado); // 30    

// Impuesto IVA 16%
resultado = (20 + 30) * 1.16;
// Primero se suma (20 + 30 = 50), luego se calcula el IVA multiplicando por 1.16. Resultado: 58.
console.log(resultado); // 58
