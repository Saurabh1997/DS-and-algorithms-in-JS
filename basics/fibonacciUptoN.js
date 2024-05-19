const getUptoNFibo = (n) => {
  let firstNum = 0,
    secondNum = 1;
  n = n - 2;
  let result = [];
  result.push(firstNum, secondNum);
  while (n > 0) {
    let temp = secondNum;
    console.log(" sec ", secondNum, " fir ", temp);
    secondNum = firstNum + secondNum;
    console.log(" sum ", secondNum);
    result.push(secondNum);
    firstNum = temp;
    n--;
  }
  return result;
};

console.log(" result ", getUptoNFibo(10));
