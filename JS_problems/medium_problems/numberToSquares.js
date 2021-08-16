//  O (N**2)  - complexity as it array.indexOf also has O(N). so Nested loop

// const isSquares = (nums, squrs) => {
//     if(nums.length !== squrs.length) return false
//     for(let i = 0;i< nums.length;i++){
//         let sqrs = squrs.indexOf(nums[i] ** 2)
//         if(sqrs === -1){
//             return false
//         }
//         squrs.splice(sqrs,1)
//         console.log("hello",sqrs,squrs)
//     }
//     return true
// }

const isSquares = (nums, squrs) => {
  if (nums.length !== squrs.length) return false;
  let numFreq = {},
    sqFreq = {};

  for (num of nums) {
    numFreq[num] = numFreq[num] + 1 || 1;
  }
  console.log(numFreq);

  for (sqrs of squrs) {
    sqFreq[sqrs] = sqFreq[sqrs] + 1 || 1;
  }
  console.log(sqFreq);

  for (num in numFreq) {
    if (sqFreq[num ** 2] != numFreq[num]) return false;
  }
  return true;
};

let nums = [1, 2, 3]; // can be repeating
let squrs = [1, 4, 9]; // can be repeating

console.log(isSquares(nums, squrs), "Equal");
