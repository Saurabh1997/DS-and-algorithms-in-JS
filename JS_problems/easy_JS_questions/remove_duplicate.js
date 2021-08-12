let str = "Saurabh";
let str1 = str.split("");
console.log("sss  " + str1);
var mp = new Map();
for (let i = 0; i <= str1.length - 1; i++) {
  //for (let j = 0; j <= str1.length - 1; j++) {
  if (!mp.has(str1[i])) {
    mp.set(str1[i], 1);
  } else {
    mp.set(str1[i], mp.get(str1[i]) + 1);
  }
  if (mp.get(str1[i]) > 1) {
    console.log(str1[i]);
    str1.splice(i, 1);
    mp.set(str1[i], mp.get(str1[i]) - 1);
  }
}
//let res = Array.from(new Set(str1.toString()));

console.log(str1);
console.log(mp);
