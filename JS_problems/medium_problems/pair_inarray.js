// //Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// //For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const General_functions = require("../General_functions");
var k = 17;
// // O(square(n))
var arr = [2, 7, 10, 15, 2];
var pairs = [];
for (var i = 0; i <= arr.length - 1; i++) {
  // var diff = k - arr[i];

  for (var j = 0; j < arr.length - 1; j++) {
    if (k - arr[i] == arr[j] && arr[i] != arr[j]) {
      if (!General_functions.ifexistsin2D(pairs, arr[i], arr[j])) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
}

console.log(pairs);

//O(n)

// var twice_count = 0;

// var mp = new Map();
// //loop to record frequency of each element in map
// for (var i = 0; i <= arr.length - 1; i++) {
//   if (!mp.has(arr[i])) {
//     mp.set(arr[i], 1); // if no repeating in map, then have its value as 0
//   } else {
//     mp.set(arr[i], mp.get(arr[i]) + 1); // if repeating, then increment value + 1
//   }
// }
// for (var i = 0; i <= arr.length - 1; i++) {
//   if (mp.get(k - arr[i]) != 0) {
//     twice_count += mp.get(k - arr[i]);
//     // mp.set(k - arr[i], mp.get(k - arr[i]) - 1);
//     // if (!General_functions.ifexistsin2D(arr, k - arr[i], arr[i])) {
//     //   pairs.push([k - arr[i], arr[i]]);
//     // }
//   }
//   if (k - arr[i] == arr[i]) {
//     twice_count--;
//   }
// }
// console.log(twice_count / 2);
// console.log(pairs);
