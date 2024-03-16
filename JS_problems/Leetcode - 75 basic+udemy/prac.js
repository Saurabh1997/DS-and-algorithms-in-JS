var twoSum = function (nums, target) {
  let i = 0,
    j = i + 1;
  while (i < nums.length) {
    if (nums[i] + nums[j] === target && i !== j) {
      return [i, j];
    } else {
      if (j < nums.length) {
        j++;
      } else {
        i++;
        j = 0;
      }
    }
  }
};

var binaryApproach = function (nums, target) {
  try {
    let temporary = nums.slice(0).sort((a, b) => a - b);
    let i = 0;
    let low = i,
      high = temporary.length - 1;
    let result = [];
    while (low < high) {
      let tempSum = 0;
      console.log(" low ", low, "hi ", high, " temp ", temporary);
      tempSum = temporary[low] + temporary[high];
      console.log(
        " inde 2 ",
        target,
        tempSum,
        " sum ",
        temporary[low],
        temporary[high]
      );

      if (tempSum === target) {
        result = [temporary[low], temporary[high]];
        const [num1, num2] = result;
        const index1 = nums.indexOf(num1);
        const index2 = nums.indexOf(num2);
        console.log(" inde ", index1, " inde ", index2);
        return [index1, index2];
      } else if (tempSum > target) {
        high--;
      } else {
        low++;
      }
    }
  } catch (error) {
    console.log(" err ", error);
  }
};

console.log(" result  - ", binaryApproach([3, 3], 6));
