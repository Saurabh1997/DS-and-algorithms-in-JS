let num = 1234
let res = 0,
    rem;
while (num != 0) {
    rem = num % 10;
    res = res * 10 + rem;
    num = Math.floor(num / 10)
}

//var temp = new Array();
// while (parseInt(num) != 0) {
//     var t = num % 10;
//     temp.push(parseInt(t))
//     num = num / 10;

// } this is for getting output as array
console.log(res);