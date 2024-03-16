const countUniqueValues = (array) => {
  let i = 0;
  let j = i + 1;
  let arr = [];
  arr.push(array[i]);
  let count = 1;
  while (j < array.length) {
    if (array[i] === array[j]) {
      j++;
    } else {
      arr.push(array[j]);
      count++;
      i = j;
      j++;
    }
  }
  return { count, arr };
};

const array = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5];
console.log(
  " countUniqueValues(array) naive --  ",
  countUniqueValues(array),
  " performance",
  performance.now()
);
