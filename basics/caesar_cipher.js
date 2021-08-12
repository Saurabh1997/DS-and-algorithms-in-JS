//   abc, 2  shift 2 alphabets later. a => c , b=> d , c => e

// USING ASCII table
// let caesar_cipher = (texttoconvert, secret_key) => {
//   //  basic implementation
//   let lowertext = texttoconvert.toLowerCase();
//   let num = "";
//   for (let i = 0; i <= lowertext.length - 1; i++) {
//     let temp = lowertext.charCodeAt(i) + secret_key;
//     if (lowertext[i] == " ") {
//       continue;
//     }
//     console.log(temp);
//     // console.log(temp);
//     if (temp <= 122 && temp >= 97) {
//       num += String.fromCharCode(temp);
//     } else if (temp > 122 && temp < 148) {
//       let newtemp = temp - 122;
//       let newtemp1 = 96 + newtemp;
//       num += String.fromCharCode(newtemp1);
//     } else if (temp < 97 && temp > 71) {
//       let newindex = 97 - temp;
//       let newtemp = 123 - newindex;
//       num += String.fromCharCode(newtemp);
//     } else {
//       continue;
//     }
//   }
//   console.log(num);
// };

//convert to lower, for loop to encipher --check if there's space, check if index greater
//
const caesar_cipher = (texttoconvert, secret_key) => {
  let tolower = texttoconvert.toLowerCase();
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let ciphertext = "";
  for (let i = 0; i < tolower.length; i++) {
    if (tolower[i] == " ") {
      ciphertext += tolower[i];
    } else {
      let temp = alphabets.indexOf(tolower[i]);
      // if (temp > -1) {
      //   var newindex = temp + secret_key;
      //   if (newindex < 26 && newindex >= 0) {
      //     ciphertext += alphabets[newindex];
      //   } else if (newindex > 25) {
      //     let newindex1 = newindex - 26;
      //     console.log("new " + newindex1);
      //     ciphertext += alphabets[newindex1];
      //   } else if (newindex < 0) {
      //     let newindex1 = 26 + newindex;
      //     console.log(newindex1);
      //     ciphertext += alphabets[newindex1];
      //   } else {
      //     console.log("something is wrong");
      //   }
      // }
      if (temp > -1) {
        var newindex = temp + secret_key;
        if (newindex < 26 && newindex >= 0) {
          // ciphertext += alphabets[newindex];
          newindex = newindex;
        } else if (newindex > 25) {
          newindex = newindex - 26;
          console.log("new " + newindex);
          // ciphertext += alphabets[newindex1];
        } else if (newindex < 0) {
          newindex = 26 + newindex;
          console.log(newindex);
          //  ciphertext += alphabets[newindex1];
        } else {
          console.log("something is wrong");
        }
        ciphertext += alphabets[newindex];
      } else {
        continue;
      }
    }
  }
  return ciphertext;
};
console.log(caesar_cipher("ABC", 2));
