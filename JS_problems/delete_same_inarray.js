//Deleting common array elements
// O(square(n))
var arr = [2, 7, 10, 15, 2];
// for (var i = 0; i <= arr.length - 1; i++) {
//   var temp = arr[i];
//   for (var j = 0; j <= arr.length - 1; j++) {
//     if (temp == arr[j] && i != j) {
//       arr.pop(arr[j]);
//     }
//   }
// }
// console.log(arr);

//O(n)
var mp = new Map();
for (var i = 0; i <= arr.length - 1; i++) {
  if (!mp.has(arr[i])) {
    mp.set(arr[i], 1);
  } else {
    mp.set(arr[i], mp.get(arr[i]) + 1);
  }
  while (mp.get(arr[i]) >= 2) {
    arr.pop(arr[i]);
    mp.set(arr[i], mp.get(arr[i]) - 1);
  }
}
console.log(arr);
