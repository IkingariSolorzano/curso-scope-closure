const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};

helloWorld(); // Hasta este punto se ejecuta la función sin ningún problema porquue se accede a la función
//y es la misma función la que imprime el valor de la variable
console.log(hello); // Esta línea no se ejecuta y genera error ya que la variable hello es una variable local
