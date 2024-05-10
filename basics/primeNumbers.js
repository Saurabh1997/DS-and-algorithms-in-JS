//Prime number - number which just has two factors - 1 and the number itself.

const checkPrimeNumber = (N) => {
  //   let i = 1,
  //     count = 0;
  //   while (i <= N) {
  //     if (N % i === 0) {
  //       count++;
  //     }
  //     i++;
  //   }
  //   return !(count > 2);
  let i = 1,
    count = 0;
  while (i <= Math.sqrt(N)) {
    if (N % i === 0) {
      count++;
      let ans = N / i;
      if (ans !== i) {
        count++;
      }
    }
    i++;
  }
  return !(count > 2);
};

console.log(" result ", checkPrimeNumber(19));
