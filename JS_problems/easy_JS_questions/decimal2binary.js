//          5 % 2 = 1 , 5/2 = 2 , 2%2 = 0, 2/2 = 1, 1%2  = 1, 1/2 = 0
//  So, 1,0,1 . reverse it
let num = 5;
let arr = "";

while (num > 0) {
  arr += num % 2;
  num = Math.floor(num / 2);
}
let arr1 = [];
for (let i = 0; i <= arr.length - 1; i++) {
  arr1[i] = arr[arr.length - i - 1];
}
// console.log(arr);
console.log(arr1);
// bitwise operator work faster than
