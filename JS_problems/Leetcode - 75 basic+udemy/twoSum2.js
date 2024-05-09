/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var start;
// THIS IS FOR UNSORTED ARRAY
var twoSum2 = function (numbers, target) {
  start = Date.now();
  let sum = 0,
    i = 0,
    j = i + 1;
  while (i < numbers.length - 1) {
    sum = numbers[i] + numbers[j];
    if (sum === target && i !== j) {
      return [i + 1, j + 1];
    } else {
      if (j < numbers.length) {
        j++;
      } else {
        i++;
        j = i + 1;
      }
    }
  }
};

var twoSum = function (numbers, target) {
  let sum = 0,
    i = 0,
    j = numbers.length - 1;
  while (i < j) {
    sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    }
    if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
};

const arr = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1,
];
console.log(" result is ", twoSum(arr, 2), " time ", Date.now() - start);
