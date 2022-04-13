const helloWorld = () => {
  globalVar = "I am global"; // se declara una variable global dentro de la función, lo cual es una MALA PRÁCTICA
};

helloWorld();
console.log(globalVar);

const helloWorld = () => {
  var localVar = (globalVar = "I am local"); // Esto no se debe de hacer
};

helloWorld();
console.log(globalVar); // Salida: Se puede imprimir en consola la variable pero es un MALA PRÁCTICA
console.log(localVar); //Salida:  La variable no está definida
