const helloWorld = () => {
  const hello = "HelloWorld";
  console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "i am gobal";

const functionScope = () => {
  var scope = "i am just a local variable";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
