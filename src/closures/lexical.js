const billCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

let variable = billCount(10);

variable();
variable();
variable();

const myOrtherCount = billCount(10);
myOrtherCount();
myOrtherCount();
myOrtherCount();
