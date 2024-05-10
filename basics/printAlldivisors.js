//Naive approach = O(n)
const getAllDivisors = (num) => {
  let i = 1;
  let result = [];
  while (i <= num) {
    if (num % i === 0) {
      result.push(i);
    }
    i++;
  }
  return result;
};

const getAllDivisorsOptimized = (num) => {
  let i = 1;
  let result = [];
  let temp = num;
  while (i < temp) {
    // can use sqrt(n )     // O (sqrt(n))
    if (num % i === 0) {
      temp = num / i;
      result.push(i);
      if (temp !== i) {
        result.push(temp);
      }
    }
    i++;
  }
  // O (nlogn)
  return result.sort((a, b) => a - b);

  // final -  O (sqrt(n)) + O (nlogn)
};

console.log(" result  ", getAllDivisorsOptimized(36));
