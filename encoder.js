//reverse string - replace each char with equivalent no
// in alphabet list + its position in string starting from 0
//----------get - teg = 20+0 5+1 7+2 = 2069

let str = "insight";
let arr = [];
let sum = 0;
let final = "";
var str1 = "";
for (let i = 0; i <= str.length - 1; i++) {
  str1 += str.charAt(str.length - i - 1);
}
console.log(str1);
for (let i = 0; i <= str1.length - 1; i++) {
  let asciivalue = str1.charCodeAt(i);
  if (173 > asciivalue && asciivalue > 97) {
    arr[i] = str1.charCodeAt(i) - 96; // from 97 ascii value for "a"
  } else if (asciivalue > 64 && asciivalue < 91) {
    arr[i] = str1.charCodeAt(i) - 64; // from 64 ascii value for "A"
  }
}
for (let i = 0; i <= str.length - 1; i++) {
  sum = arr[i] + str.indexOf(str[i]);
  final += sum;
}
console.log(arr);
console.log(final);
