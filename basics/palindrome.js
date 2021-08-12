isPalindrome = (str) => {
  var str2 = str.toLowerCase();
  var str3 = str2.split("");
  var str1 = [];
  var validChar = "abcdefghijklmnopqrstuvwxyz".split("");
  str3.forEach((element) => {
    if (validChar.indexOf(element) > -1) {
      str1.push(element);
    }
  });
  // for (i = 0; i <= str1.length - 1; i++) {
  //   if (str1[i] == str1[str1.length - i - 1]) {
  //     isPalin = true;
  //     return isPalin;
  //   } else {
  //     console.log(str1[i] + " " + str1[str1.length - i - 1]);
  //     isPalin = false;
  //     return isPalin;
  //   }
  // }
  if (str1.join() == str1.reverse().join()) {
    return true;
  } else {
    return false;
  }
};
var str = "Raceacar";

console.log(isPalindrome(str));
