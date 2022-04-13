// Lo primero es crear la carpeta con "mkdir scope-closure"
// git init
// npm init

//  ###### CLASE 1 ######
// Estas variables a continuación están definidas en el scope global
var hello = "Hello motherfuckers!"; // La variable hello se define global con var y por la part del codigo donde fue declarada
var hello = "Hello motherbitches"; // Con var las variables pueden ser declaradas nuevamente aunque esto ES UNA MALA PRÁCTICA
let world = "Hello World!"; // Se declara una variable en el scope global con Let
/*let*/ world = "Hello world! Bitches"; // como la variable world ya había sido declarada, no puede declararse nuevamente, solamente reasignarse
const helloWorld = "Hello Wolrd!";
/*const*/ helloWorld = "Hello Wolrd Segunda parte!"; // no se puede declarar nuevamente la constante helloWorld y tampoco puede ser reasignada por ser CONSTANTE

// console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};
anotherFunction();
