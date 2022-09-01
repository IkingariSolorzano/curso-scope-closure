// Este código antes del use stric funciona si no se usa modo estrcito.
//pi = 3.1416;
//console.log(pi);

"use strict"; // Aquí se declara modo estricto y las variables no declaradas no pueden ser inicializadas como en la línea 2

let pi = 3.1416; // si comentamos esta línea para no declarar la variable
console.log(pi);

function myFunction() {

    "use strict";
    return pi;
}

console.log(myFunction());
