/// we take 2 NUMBERS - A AND B AND CALCULATE answer of the number 1 % number 2
///  and then take NUMBER 1 % NUMBER 2 AS A AND NUMBER 1 AS B.
// AND WE REPEAT THE PROCESS OF BY CALCULATING AGAIN      B % A , A
// UNLESS AND UNTIL WE GET A AS 0, THEN WE RETURN B ---
// AS A WILL GET EXHAUSTED BY CALCULATING B % A AND SUPPLYING IT TO A AS VALUE.. AND B WILL BE LAST VALUE OF A..BEFORE 0.

const getGCDOfTwoNumbersRecursive = (value1, value2) => {
  if (value1 === 0) {
    return value2;
  }
  return getGCDOfTwoNumbersRecursive(value2 % value1, value1);
};

const getGCDWithoutRecursive = (value1, value2) => {
  while (value1 > 0) {
    let temp = value1;
    value1 = value2 % value1;
    value2 = temp;
  }
  return value2;
};

console.log(" result ", getGCDWithoutRecursive(60, 36));
