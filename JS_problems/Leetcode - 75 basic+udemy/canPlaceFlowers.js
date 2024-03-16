/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// ------------------ LAYMEN APPROACH ----------
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (n > 0 && flowerbed[i] === 0) {
      if (flowerbed.length === 1) {
        flowerbed[i] = 1;
        n -= 1;
      }

      if (i == 0 && flowerbed[i + 1] == 0) {
        flowerbed[i] = 1;
        n -= 1;
      } else if (
        i + 1 < flowerbed.length &&
        flowerbed[i - 1] === 0 &&
        flowerbed[i + 1] === 0
      ) {
        flowerbed[i] = 1;
        n -= 1;
      } else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
        flowerbed[i] = 1;
        n -= 1;
      }
    }
  }
  if (n === 0) {
    return true;
  } else {
    return false;
  }
};

var CanPlaceFlowersOptimized = (flowerbed, n) => {
  for (let i = 0; i < flowerbed.length; i++) {
    if (n <= 0) return true;
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 0 || i === flowerbed.length - 1) {
        n--;
        i++;
      } else {
        // IF i+1 is already 1, then we also have to skip next element so i+2 + 1
        i += 2;
      }
    } else {
      // if its 1 directly jump 2 places. 1 here and other one in loop.
      i++;
      continue;
    }
  }
  return n <= 0;
};

console.log(" data here ", CanPlaceFlowersOptimized([0, 1, 0], 1));
