var array = [1, 2, 3, 4, "saurabh"];

///////////////to convert array to object - {'0':1, }
console.log(Object.assign({}, array));

///////////////without using function
function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i) {
    rv[i] = arr[i];
    console.log(rv);
  }
  return rv;
}

////////to filter array to create new array

var array2 = ["sapppp", "nodejs", "java", "C", "C++"];
let arr1 = array2.filter(arr => arr.length > 2);
console.log(arr1);

///////////without using filter function
var array2 = ["sapppp", "nodejs", "java", "C", "C++"];
var arr2 = [];
array2.forEach(elem => {
  if (elem.length > 2) {
    arr2.push(elem);
  }
});
console.log(arr2);

///////// for converting object to array
var obj = {
  name: "saurabh",
  subject: "CS"
};
//direct method to convert
var arr = Object.entries(obj);

//console.log(arr);
