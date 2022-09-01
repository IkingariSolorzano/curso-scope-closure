var scope = "i am gobal";

const functionScope = () => {
  // Se crea nuevamente la variable y se le asigna un valor
  var scope = "i am just a local variable";
  // Se crea una nueva función que retorna la variable que se está generando en la línea de arriba
  const func = () => {
    return scope; // trabaja con el valor de la variable al nivel de la función que la está definiendo
  };
  //en este nivel de scope se genera un console.log que imprime lo que retorna la función "func"
  console.log(func());
};

functionScope();
console.log(scope); //muestra el valor de la variable global
