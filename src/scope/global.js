var hello = "Hello";
let wolrd = "Wolrd";
const helloWolrd = "Hello Wolrd";

// Con var podemos re-asignar una variable, pero es mala práctica
var hello = "Hello!!!";

/* Con let y const no se puede re-asignar su valor, es error de sintaxis
let wolrd = "Wolrd!!!"
const helloWolrd = "Hello World!!!"
*/

const anotherFunction = () => {
    console.log(hello);
    console.log(wolrd);
    console.log(helloWolrd);
}

anotherFunction();

/* Si se asigna una variable dentro de una función sin las palabras reservadas
será una variable global */
const helloWolrd = () => {
    globalVar = 'Im global var';
}

helloWolrd();
console.log(globalVar);

