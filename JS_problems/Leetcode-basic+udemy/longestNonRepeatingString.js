const longestNonRepeatingStringNaive = (s) => {
  let tempMaxString = [];
  let subString = [];
  if (s.length <= 1) {
    return s.length;
  }
  for (let i = 0; i < s.length; i++) {
    let foundIndex = subString.indexOf(s[i]);
    if (foundIndex !== -1) {
      if (foundIndex === 0) {
        subString.splice(0, 1, s[i]);
      } else {
        subString.splice(0, foundIndex);
      }
    } else {
      subString.push(s[i]);
    }
    console.log(" h 1 ", tempMaxString, subString, " ind ", s[i], foundIndex);

    if (tempMaxString.length < subString.length) {
      tempMaxString = subString.slice();
    }
  }
  if (tempMaxString.length === 0) {
    tempMaxString = subString.slice();
  }
  console.log(" h e ", tempMaxString, subString);
  return tempMaxString.length;
};

// SLIDING WINDOW PATTERN
const longestNonRepeatingString = (str) => {
  let maxLength = 0;
  let i = 0;
  let tempObj = {};
  while (i < str.length) {
    if (!tempObj[str[i]]) {
      tempObj[str[i]] = 1;
    } else {
      tempObj[str[i]] += 1;
    }
    i++;
  }
  return tempObj;
};

const string = "aabaab!bb";
console.log(" maximum sub ", longestNonRepeatingStringNaive(string));
