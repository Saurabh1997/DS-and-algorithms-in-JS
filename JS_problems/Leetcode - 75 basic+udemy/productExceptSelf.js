var NaiveproductExceptSelf = function (nums) {
  return nums.map((num) => {
    let tempNum = 1;
    nums.forEach((element, i) => {
      if (element !== num) {
        tempNum *= element;
      }
    });
    return tempNum;
  });
};

console.log(" resul ", NaiveproductExceptSelf([1, 2, 3, 4]));
