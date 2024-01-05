// Comparación entre null y undefined

// undefined: Se obtiene cuando una variable ha sido declarada pero no tiene un valor asignado.
let numero;
console.log(numero); // Muestra 'undefined', ya que 'numero' no tiene un valor asignado.
console.log(typeof numero); // Muestra 'undefined', confirmando el tipo de 'numero'.

// null: Es un valor asignado que representa la ausencia de valor.
let numero2 = null;
console.log(numero2); // Muestra 'null', ya que 'numero2' fue explícitamente asignado a null.
console.log(typeof numero2); // Muestra 'object'. En JavaScript, 'null' es considerado un objeto, que es un comportamiento conocido del lenguaje.

// Comparación entre null y undefined
console.log(numero == numero2); // Muestra 'true'. '==' compara los valores, y tanto 'null' como 'undefined' representan ausencia de valor.

// Importancia del comparador estricto
console.log(numero === numero2); // Muestra 'false'. '===' compara tanto el valor como el tipo, y 'null' y 'undefined' son tipos diferentes.
