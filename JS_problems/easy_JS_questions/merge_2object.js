var obj1 = {
  name: "Saurabh",
  age: 23,
};
var obj2 = {
  gender: "M",
  Education: "BE",
};
// var obj3 = Object.assign(obj1, obj2);
// var arr = Object.entries(obj2);
// for (var i = 0; i <= arr.length - 1; i++) {
//   obj1[arr[i][arr[i].length - 2]] = arr[i][arr[i].length - 1];
// }

for (x in obj2) {
  obj1[x] = obj2[x];
}
