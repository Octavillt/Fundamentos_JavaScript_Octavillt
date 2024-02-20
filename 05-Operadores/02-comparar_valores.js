const numero1 = 20; // Se declara una constante 'numero1' con el valor 20 (número).
const numero2 = "20"; // Se declara 'numero2' como cadena de texto "20".
const numero3 = 30; // Se declara 'numero3' con el valor 30 (número).

// Comparación de igualdad (==)

// Muestra 'false' porque 20 no es igual a 30.
console.log(numero1 == numero3); // false

// Muestra 'true' debido a la conversión de tipo automática de JavaScript.
console.log(numero1 == numero2); // true

// Uso de 'typeof' para comprobar el tipo de dato

// Muestra 'number', indicando el tipo de 'numero1'.
console.log(typeof numero1); // number

// Muestra 'string', indicando que 'numero2' es una cadena.
console.log(typeof numero2); // string

// Comparación de igualdad estricta (===)

// Muestra 'false', ya que compara tanto valor como tipo.
console.log(numero1 === numero2); // false

// Muestra 'true', 'numero2' se convierte a número.
console.log(numero1 === parseInt(numero2)); // true

// Operadores de desigualdad
const password1 = 'admin'; // Declara 'password1' como 'admin'.
const password2 = 'Admin'; // Declara 'password2' como 'Admin'.

// Muestra 'true', las cadenas son diferentes.
console.log(password1 != password2); // true

// Muestra 'false', son iguales en valor.
console.log(numero1 != numero2); // false

// Muestra 'true', son diferentes en tipo.
console.log(numero1 !== numero2); // true

// Muestra 'false', son iguales en valor y tipo después de la conversión.
console.log(numero1 !== parseInt(numero2)); // false
