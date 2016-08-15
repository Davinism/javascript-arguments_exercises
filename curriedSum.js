function curriedSum(numArgs) {
  const numbers = [];
  return function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      let totalSum = 0;
      numbers.forEach((num) => {
        totalSum += num;
      });
      return totalSum;
    }
    else {
      return _curriedSum;
    }
  };
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));
