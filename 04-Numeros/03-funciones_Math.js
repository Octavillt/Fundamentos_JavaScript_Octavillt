let resultado;

// Pi
resultado = Math.PI;
// Math.PI devuelve el valor de Pi. Resultado: aproximadamente 3.14159.
console.log(resultado); // 3.141592653589793

// Redondeo
resultado = Math.round(2.5);
// Math.round(2.5) redondea el número 2.5 al entero más cercano. Resultado: 3.
console.log(resultado); // 3

// Redondeo Abajo o Arriba (floor o ceil)
resultado = Math.floor(2.2);
// Math.floor(2.2) redondea hacia abajo al entero más cercano. Resultado: 2.
console.log(resultado); // 2

resultado = Math.ceil(2.2);
// Math.ceil(2.2) redondea hacia arriba al entero más cercano. Resultado: 3.
console.log(resultado); // 3

// Raíz Cuadrada
resultado = Math.sqrt(144);
// Math.sqrt(144) calcula la raíz cuadrada de 144. Resultado: 12.
console.log(resultado); // 12

// Valor Absoluto
resultado = Math.abs(-300);
// Math.abs(-300) devuelve el valor absoluto de -300. Resultado: 300.
console.log(resultado); // 300

// Potencia
resultado = Math.pow(8, 3);
// Math.pow(8, 3) eleva 8 al cubo (8^3). Resultado: 512.
console.log(resultado); // 512

// Mínimo
resultado = Math.min(3, 5, 1, 2, 9, 4, 2, -3);
// Math.min() devuelve el número más pequeño de los proporcionados. Resultado: -3.
console.log(resultado); // -3

// Máximo
resultado = Math.max(4, 1, 21, 4, 15, 5, 11, 5);
// Math.max() devuelve el número más grande de los proporcionados. Resultado: 21.
console.log(resultado); // 21

// Aleatorio
resultado = Math.random();
// Math.random() devuelve un número aleatorio entre 0 y 1.
console.log(resultado); // 0.12345678901234567

// Aleatorio Dentro de un Rango:
resultado = Math.floor(Math.random() * 30);
/* Math.random() genera un número aleatorio entre 0 y 1, que se multiplica por 30 para obtener un rango de 0 a 29. 
   Luego, Math.floor() redondea hacia abajo para obtener un entero. Resultado: un número entre 0 y 29. */
console.log(resultado); // 15
