const binary_search = (arr, num) => {
  var low = 0;
  var high = arr.length - 1;
  var mid;
  while (high > low) {
    mid = Math.round((low + high) / 2);
    if (arr[mid] == num) {
      return mid;
    } else if (arr[mid] > num) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
};

let arr = [2, 7, 10, 15, 11, 4];
arr.sort((a, b) => parseInt(a) - parseInt(b));
console.log(arr);
console.log(binary_search(arr, 7));

module.exports = { binary_search };
