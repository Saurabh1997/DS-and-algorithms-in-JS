//create function to remove duplicate from 2d array
// arr = [
//   [2, 3],
//   [3, 4],
//   [3, 2]
// ];

// if (
//   arr[0][0] == arr[0][arr[0].length - 2] &&
//   arr[0][1] == arr[0][arr[0].length - 1]
// ) {
//   console.log("matched");
// }
// var count = 0;
module.exports = {
  ifexistsin2D(arr, a, b) {
    for (var i = 0; i <= arr.length - 1; i++) {
      if (
        (arr[i][arr[i].length - 2] == a && arr[i][arr[i].length - 1] == b) ||
        (arr[i][arr[i].length - 2] == b && arr[i][arr[i].length - 1] == a)
      ) {
        return true;
      }
    }
    return false;
  },

  // console.log(ifexistsin2D(arr, 2, 3));
};
