// alert lanza una alerta en el navegador
// alert("Hola Mundo") 
'use strict';


// Primer Program en Javascript
/*
const nombre = prompt('Cual es tu nombre?'); // prompt es una Alerta de tipo Input
document.querySelector('.contenido').innerHTML = ` ${nombre} está aprendiendo JavaScript Moderno!`;
*/
// Fin Primer Program en Javascript


// Esto es un Comentario
/*
Comentar el código es una de las caracteristicas más importantes que debes adoptar temprano en tu carrer acomo programador
Muchas personas dicen que el buen código habla por si solo, decir algo asi es como decir que un buen libro es cuando sabes 
en que página y que parrafo esta una frase, podrás recordarlo a la semana o al mes, pero no lo vas a recordar en 6 meses o un año.
Existen 2 tipos de comentarios, de una linea o de múltiples lineas
*/

/*  
Todos los navegadores tienen una consola de Javascript, las mejores sin duda son firefox y Chrome
La consola es muy útil ya que podrás observar tu código JS, resultados y seleccionar elementos
*/

/*Tipos de Mnsajes en Consola*/

// Se pueden crear variables e imprimirlas
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear Arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear Objetos
let obj = {
    nombre: "juan",
    profesion: "Desarrollador Web"
}
console.log(obj);

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún Error
console.error("Algo salió mal");

// Limpiar la consola
console.clear();

// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); console.warn("Eso no esta permitido"); console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.timeEnd('Hola');
/* Fin Tipos de Mnsajes en Consola*/

/*
Muchos programadores cometen el error de que se fijan en tener un código muy ordenado en lugar 
de preocuparse por aprender cosas más avanzadas, otros cometen el error al reves, aprenden un lenguaje 
a profunidad pero su código es muy desordenado y dificil de leer
*/

/*
JavaScript tiene una caracteristica, a diferencia de otros lenguajes de programación el ; al final  
no es obligatorio salvo que tengas 2 líneas de código en una misma.
*/
// ejemplo:

console.log('Hola')
console.log('Mundo')

// va a funcionar, pero si tienes un código desordenado; no va a funcionar salvo que pongas ; 
console.log('Hola'); console.log('Mundo');


/*
Como recomendación siempre pon una instrucción por linea, no es obligatorio salvo el caso que vimos
anteriormente pero va a facilitar mucho tu código
*/

// ahora, vamos a crear una función
/*
    function hola() {
    console.log('ok')
    }
*/
// En estos casos esta función es valida y va a funcionar, pero es mejor utilizar tabs o espacios



// Obteniendo ayuda con ESLint para revisar errores de código.
// crear el archivo .eslintrc.json
/*
{
    "parserOptions" : {
        "ecmaVersion": 6
    },
    "rules" : {
        "semi": ["error", "always"] //Muestra errores de código o también errores de código
    }
}
*/
