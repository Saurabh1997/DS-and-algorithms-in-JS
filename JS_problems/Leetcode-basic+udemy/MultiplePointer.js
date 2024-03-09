const sumZeroNaive = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
  return "No Element found";
};

const refactoredsumZero = (array) => {
  let i = 0;
  let j = array.length - 1;
  if (i === j) {
    return array[0];
  }
  while (i !== j) {
    if (array[i] + array[j] === 0) {
      return [array[i], array[j]];
    } else if (array[i] + array[j] > 0) {
      j--;
    } else {
      i++;
    }
  }
  return "No Element found";
};

const array = [
  -25, -10, -4, -3, -2, -1, 0, 1, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 20, 21, 23,
  24,
];
console.log(
  " sumZeroNaive(array) naive --  ",
  sumZeroNaive(array),
  " performance",
  performance.now()
);

console.log(
  " sumZeroNaive(array) naive --  ",
  refactoredsumZero(array),
  " performance",
  performance.now()
);
