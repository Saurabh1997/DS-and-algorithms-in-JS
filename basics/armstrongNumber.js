const armstrongNumber = (num) => {
  let sum = 0;
  let dup = num;
  while (num > 0) {
    let lastDigit = num % 10;
    sum = sum + lastDigit * lastDigit * lastDigit;
    num = parseInt(num / 10);
  }
  return sum === dup;
};

console.log(" result ", armstrongNumber(371));
