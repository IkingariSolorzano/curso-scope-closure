const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`Money Box : $${saveCoins}.°°`);
};

moneyBox(20);
moneyBox(10);
moneyBox(8);

const funcion1 = () => {
  var saveCoins = 0;
  const funcion2 = (coins) => {
    saveCoins += coins;
    console.log(`Money Box : $${saveCoins}`);
  };
  return funcion2;
};

const final = funcion1();
final(10);
final(8);
final(5);
