// Uso de Parámetros por Defecto en Funciones de JavaScript

// Definición de la función 'saludar' con parámetros por defecto.
function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre}  ${apellido} `);
    /*
        Esta función imprime un saludo personalizado.
        Los parámetros 'nombre' y 'apellido' tienen valores por defecto.
        'nombre' se inicializa como 'Desconocido' y 'apellido' como una cadena vacía.
        Si se omite alguno de los parámetros en la llamada a la función, se utilizarán estos valores por defecto.
    */
}

// Llamada a la función 'saludar' con ambos parámetros.
saludar('Octavio', 'Villafranco');
// En esta llamada, 'nombre' es 'Octavio' y 'apellido' es 'Villafranco'.
// La función imprimirá "Hola Octavio Villafranco".

// Llamada a la función 'saludar' con un solo parámetro.
saludar('Israel');
// Aquí, solo se proporciona el 'nombre', y 'apellido' tomará el valor por defecto ('').
// La función imprimirá "Hola Israel ".

// Llamada a la función 'saludar' sin parámetros.
saludar();
// En esta llamada, se utilizan ambos valores por defecto: 'Desconocido' para 'nombre' y '' para 'apellido'.
// La función imprimirá "Hola Descon
