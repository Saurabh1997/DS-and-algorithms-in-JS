const reverseNumbers = (num) => {
  let reverseNum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = parseInt(num / 10);
  }

  return reverseNum;
};

console.log(" result ", reverseNumbers(87374));

/// Output - 47378
