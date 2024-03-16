// console.log(" string ", string[i], " string split", string.split(/\s/g));
// let temp = "";
// if (string[i] !== /\s/g) {
//   console.log(" here ");
//   temp += string[i];
//   i++;
// } else {
//   console.log(" pushing ");
//   arr.push(temp);
//   i++;
// }

var easyReverseWords = function (s) {
  return s
    .trim()
    .split(/\s/g)
    .filter((str) => str !== "")
    .reverse()
    .join(" ");
};

console.log("revered string is ", easyReverseWords("a good   example"));
