// Temporizador
// Despues de algunas pruebas con setTimeout y con setInterval
//pude elaborar un sencillo temporizador que me ayudará en el proyecto que tengo pensado hacer
// para la aplicación de entrenamiento
let x = 0;

const conteo = () => {
  if (x < 10) {
    console.log(x);
    x++;
  } else {
    clearInterval(inicio);
  }
};

const inicio = setInterval(() => {
  conteo();
}, 1000);
