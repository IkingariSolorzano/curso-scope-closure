const conteo = () => {
  // En este punto, declarar la variable i con "var" hace que el valor sea global y se quede el acceso al último elemento del loop
  // de tal manera que la iteración continúa por fuera del setTimeout en llegando a 10 antes de que se imrima el primer console.log()
  // Así el resultado de este loop es la impresión 10 veces del último número, es decir, el 10
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};
conteo();

const conteo = () => {
  // Declarar el contador con "let" limita el scope de la variable, por lo cual no puede aumetar su valor
  // hasta no ser ejecutado dentro de for la accion señalada
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
};
conteo();

const conteoWhile = () => {
  let i = 0;
  while (i < 10) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
    i++;
  }
};
