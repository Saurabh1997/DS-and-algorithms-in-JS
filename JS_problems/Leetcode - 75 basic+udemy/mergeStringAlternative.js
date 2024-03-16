/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let newWord = "";
  let minLength = Math.min(word1.length, word2.length);
  let i = 0;
  while (i < minLength) {
    newWord += word1[i] + "" + word2[i];
    i++;
  }
  if (word1.length > word2.length) {
    newWord += word1.substring(i, word1.length);
  }
  if (word1.length < word2.length) {
    newWord += word2.substring(i, word2.length);
  }
  return newWord;
};

console.log(" data ", mergeAlternately("ab", "pqrs"));
