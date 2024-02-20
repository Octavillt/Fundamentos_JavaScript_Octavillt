// Comparación entre null y undefined

// undefined: Se obtiene cuando una variable ha sido declarada pero no tiene un valor asignado.
let numero;

// Muestra 'undefined', ya que 'numero' no tiene un valor asignado.
console.log(numero); // undefined

// Muestra 'undefined', confirmando el tipo de 'numero'.
console.log(typeof numero); // undefined

// null: Es un valor asignado que representa la ausencia de valor.
let numero2 = null;

// Muestra 'null', ya que 'numero2' fue explícitamente asignado a null.
console.log(numero2); // null

// Muestra 'object'. En JavaScript, 'null' es considerado un objeto, que es un comportamiento conocido del lenguaje.
console.log(typeof numero2); // object

// Comparación entre null y undefined
// Muestra 'true'. '==' compara los valores, y tanto 'null' como 'undefined' representan ausencia de valor.
console.log(numero == numero2); // true

// Importancia del comparador estricto
// Muestra 'false'. '===' compara tanto el valor como el tipo, y 'null' y 'undefined' son tipos diferentes.
console.log(numero === numero2); // false
