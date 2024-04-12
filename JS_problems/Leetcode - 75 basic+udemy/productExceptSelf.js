var NaiveproductExceptSelf = function (nums) {
  return nums.map((num) => {
    let tempNum = 1;
    nums.forEach((element, i) => {
      if (element !== num) {
        tempNum *= element;
      }
    });
    return tempNum;
  });
};

// not accurate for -1 and 0
const usingDivisionSolution = (nums) => {
  const tempProd = nums.reduce((acc, curr) => acc * curr, [1]);
  const resultArray = nums.map((num) => tempProd / num);
  return resultArray;
};

// for any nums[i], calculate left product.. and then calculate its right product.. without nums[i]
//then multiply left & right.

// prefix [0] = 1
// [1, 2, 3, 4]
// for prefix we will do  prefix[i]  = prefix[i-1] * array[i-1] --- // 1,1,2, 6
// for suffix suffix[n-1] = 1
// we will do suffix[i]  = suffix [i+1]* array[i+1] //              24,12,4,1
// now do product [i] * suffix[i] = 24,12,8,6
// Output: [24,12,8,6]
// how to shorten into single array O[1]... only productArray to be used.
//(The output array does not count as extra space for space complexity analysis.)

const refactoredSolution = (num) => {
  let prefix = new Array(num.length).fill(1),
    suffix = new Array(num.length).fill(1);

  console.log(" pre ", prefix);
  for (let i = 1; i < num.length; i++) {
    prefix[i] = prefix[i - 1] * num[i - 1];
  }
  for (let i = num.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * num[i + 1];
  }
  for (let i = 0; i < num.length; i++) {
    num[i] = prefix[i] * suffix[i];
  }

  console.log(" pre ", prefix, " suffix ", suffix);
  return num;
};

// [1, 2, 3, 4]
// Output: [24,12,8,6]
const refactoredSolution1 = (nums) => {
  let resultArray = new Int32Array(nums.length).fill(1);
  let pre = 1;
  for (let i = 1; i < nums.length; i++) {
    resultArray[i] = pre * nums[i - 1];
    pre = pre * nums[i - 1];
  }
  pre = 1;
  console.log(" resukt ", resultArray); // 1,1,2,6
  for (let j = nums.length - 2; j >= 0; j--) {
    resultArray[j] *= pre * nums[j + 1]; //  //24,12,4,1
    console.log(" coming here ", pre * nums[j + 1], " nsn ", resultArray[j]);
    pre = pre * nums[j + 1];
  }
  return resultArray;
};

console.log(" resul ", refactoredSolution1([1, 2, 3, 4]));
