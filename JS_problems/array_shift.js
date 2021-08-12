var array2 = ["sapppp", "nodejs", "java", "C", "C++"];

array2.shift();
//to delete array element at beginning of the array.
console.log(array2);

for (let i = 0; i <= array2.length - 1; i++) {
  array2[i] = array2[i + 1];
}
array2.length = array2.length - 1;
console.log(array2);
