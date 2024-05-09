function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let i = 0,
    j = 1;
  count = 0;
  while (i < n) {
    if (j < n && i < j) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
        j++;
      } else {
        j++;
      }
    } else {
      i++;
      j = i + 1;
    }
  }
  return count;
}

console.log(" divisibl ", divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
