// Replace
const producto = 'Monitor 20 Pulgadas';
console.log(producto.replace("20", "24")); // Monitor 24 Pulgadas
// .replace("20", "24") cambia la primera ocurrencia de "20" por "24" en 'producto'. Resultado: 'Monitor 24 Pulgadas'.

console.log(producto.replace('Pulgadas', '"')); // Monitor 20"
// .replace('Pulgadas', '"') cambia la primera ocurrencia de 'Pulgadas' por '"' en 'producto'. Resultado: 'Monitor 20"'.

// Slice
console.log(producto.slice(0, 10)); // Monitor 20
// .slice(0, 10) corta 'producto' desde la posición 0 hasta la 10 (sin incluir la 10). Resultado: 'Monitor 20'.

console.log(producto.slice(8)); // 20 Pulgadas
// .slice(8) corta 'producto' desde la posición 8 hasta el final. Resultado: '20 Pulgadas'.

console.log(producto.slice(2, 10)); // nitor 20
// .slice(2, 10) corta 'producto' desde la posición 2 hasta la 10 (sin incluir la 10). Resultado: 'nitor 20'.

console.log(producto.slice(2, 1)); // ''
// .slice(2, 1) no corta nada porque el inicio es mayor que el final. Resultado: ''.

// Substring
console.log(producto.substring(0, 10)); // Monitor 20
// .substring(0, 10) es similar a .slice(0, 10), pero es más tolerante a errores. Resultado: 'Monitor 20'.

console.log(producto.substring(2, 1)); // o
// .substring(2, 1) intercambia los números si el inicio es mayor que el final. Corta desde la posición 1 a 2. Resultado: 'o'.

// Primer Letra del Nombre
const nombre = "Octavio";
console.log(nombre.substring(0, 1)); // O
// .substring(0, 1) corta la primera letra de 'nombre'. Resultado: 'O'.

console.log(nombre.charAt(0)); // O
// .charAt(0) obtiene el carácter en la posición 0 de 'nombre'. Resultado: 'O'.

