const moneyBox = (coins) => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box : $${saveCoins}.°°`);
};

moneyBox(20);
moneyBox(10);
moneyBox(8); // Cada ejecución del código anterior reinicia el valor de la variable saveCoins y por lo tanto no se suma.

// Entramos en el concepto de closure
const moneyBox2 = () => {
    let saveCoins = 0;
    const countCoins = (coins, nombre) => {
        saveCoins += coins;
        console.log(`Money Box de ${nombre}: $${saveCoins}`);
    };
    return countCoins;
};

const final = moneyBox2();
final(10, "David");
final(8, "David");
final(5, "David");
const moneyBoxAna = moneyBox2();
moneyBoxAna(10, "Ana");
moneyBoxAna(10, "Ana");
moneyBoxAna(10, "Ana");
final(52, "David");
