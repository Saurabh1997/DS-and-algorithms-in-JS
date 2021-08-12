// Given an array of integers, return a new array such that each element at index i of the new array
//is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// 1- 120, 2 - 60, 3 - 40, 4- 30, 5- 24
var arr = [3, 2, 1];
var arr2 = [];
for (let i = 0; i <= arr.length - 1; i++) {
  var mult = 1;

  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[i] != arr[j]) {
      mult *= arr[j];
    }
  }
  arr2.push(mult);
}
console.log(arr2);
