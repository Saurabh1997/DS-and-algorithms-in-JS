// Calculate max sum of n consecutive numbers

// Naive approach --

// let maxSum = 0;
// let SubArray = [];
// for (let i = 0; i < n; i++) {
//   maxSum += array[i];
//   SubArray.push(array[i]);
// }
// let tempSum = 0;
// for (let i = 0; i < array.length - n; i++) {
//   tempSum = maxSum - array[i] + array[n + i];
//   if (tempSum > maxSum) {
//     SubArray.shift(array[i]);
//     SubArray.push(array[n + i]);
//   }
//   maxSum = Math.max(maxSum, tempSum);
// }

// return { maxSum, SubArray };

// 8 - 2  = 6    0,1,2,3,4,5
const maxSumOfSubArray = (array, n) => {
  let maxSum = -Infinity;
  let SubArray = [];
  for (let i = 0; i < array.length - n + 1; i++) {
    let j = i,
      sum = 0;

    while (j < n + i) {
      sum += array[j];
      j++;
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

// OPTIMIZED APPROACH -- SLIDING WINDOW PATTERN -----
const maxSumOfSubArrayOptimized = (array, n) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += array[i];
  }
  maxSum = Math.max(tempSum, maxSum);
  for (let j = n; j < array.length; j++) {
    tempSum = tempSum - array[j - n] + array[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

const array = [1, 2, 5, 8, 8, 1, 5];
console.log(
  " countUniqueValues(array) naive --  ",
  maxSumOfSubArray(array, 3),
  " performance",
  performance.now()
);

console.log(
  " countUniqueValues(array) naive --  ",
  maxSumOfSubArrayOptimized(array, 3),
  " performance",
  performance.now()
);
