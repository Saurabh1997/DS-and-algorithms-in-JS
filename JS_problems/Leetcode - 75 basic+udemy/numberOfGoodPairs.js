// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
var naiveNumIdenticalPairs = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j]) {
        result.push([nums[i], nums[j]]);
      }
    }
  }
  return result.length;
};

// [1, 2, 3, 1, 1, 3]
//
var getRefactoredPairs1 = function (nums) {
  let count = 0;
  let freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      count += freq[nums[i]];
      freq[nums[i]] += 1;
    } else {
      freq[nums[i]] = 1;
    }
  }
  return count;
};

// APPLY COMBINATION FORMULA FROM PERMUTATIONS AND COMBINATIONS ---
// nCr = n!/(n-r)! r!
// here we pick 2 number as good pair so r = 2.
// here by formula of combination = n * n-1 * n-2 * n - 3 * ...1 / 2 * (n-2) * (n -3) * (n-4)....
//  so cancelling all equals from numerator and denominator .. we get n * n-1/ 2
var getRefactoredPairs2 = function (nums) {
  let obj = {};
  let count = 0;
  nums.forEach((num) => {
    if (obj[num]) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  });
  Object.keys(obj).forEach((ob) => {
    count = count + (obj[ob] * (obj[ob] - 1)) / 2;
  });
  return count;
};

console.log(" numIndentical pairs", getRefactoredPairs1([1, 1, 1, 1]));
