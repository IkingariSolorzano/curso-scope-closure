const myGlobal = 0; //Declaramos una constante con scope global

function myFunction() {
    // una función que recibe otra funcion y tiene otra función para acceder a diferentes contextos
    const myNumber = 1; // se crea una variable sencilla
    console.log(myGlobal);
    function parent() {
        // Esta es una función interna

        const inner = 2;
        console.log(myNumber, myGlobal);
        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();

