/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = s.split("");
  const checkIfVowels = (character) =>
    character === "a" ||
    character === "A" ||
    character === "e" ||
    character === "E" ||
    character === "i" ||
    character === "I" ||
    character === "o" ||
    character === "O" ||
    character === "u" ||
    character === "U";
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (checkIfVowels(arr[i]) && checkIfVowels(arr[j])) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
    if (!checkIfVowels(arr[i])) {
      i++;
    }
    if (!checkIfVowels(arr[j])) {
      j--;
    }
  }

  return arr.join("");
};
console.log(" result ", reverseVowels("hello"));
