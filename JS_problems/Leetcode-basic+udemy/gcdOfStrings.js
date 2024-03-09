/**
 Euclidean Algorithm 
 */

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let len1 = str1.length,
    len2 = str2.length;

  while (len1 > 0) {
    let temp = len1;
    len1 = len2 % len1;
    len2 = temp;
  }
  return str1.substring(0, len2);
};

console.log(" result ", gcdOfStrings("ABCABC", "ABC"));
