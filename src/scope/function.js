const fruits = () => {
  // Se deine una función para generar las variables locales
  var fruit = "apple"; // Se define la variable fruits con un valor de inicialización
  console.log(fruit); // Se manda imprimir en consola el valor de la variable local de la función
};

fruits(); // se ejecuta la función
console.log(fruit); // Se intenta imprimir en consola el valor de la variable local de la función pero no es accesible desde fuera de la función.
