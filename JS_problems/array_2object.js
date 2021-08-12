var array2 = [
  ["foo", "bar"],
  ["baz", 42],
];
const obj = Object.fromEntries(array2); //direct function to convert array to object
console.log(obj);

// Without using any functions

var array2 = [
  ["foo", "bar"],
  ["baz", 42],
  ["kar", 45],
  ["war", 70],
];
var obj1 = {};
// obj[array2[0][0]] = array2[0][1];
// obj[array2[1][0]] = array2[1][1];
//obj[array2[2][0]]=array2[2,1]

for (var i = 0; i <= array2.length - 1; i++) {
  obj1[array2[i][array2[i].length - 2]] = array2[i][array2[i].length - 1];
  // obj[array[iterator][first_element]] = array[iterator][last_element]
}

console.log(obj1);
