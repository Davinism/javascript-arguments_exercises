Function.prototype.curry = function(numArgs) {
  const argsArray = [];
  const _curry = (arg) => {
    argsArray.push(arg);
    if (argsArray.length === numArgs) {
      return this(...argsArray);
      // return that.apply(null, argsArray);
    }
    else {
      return _curry;
    }
  };
  return _curry;
};

function sum() {
  const args = Array.from(arguments);
  let tot = 0;
  args.forEach((num) => {
    tot += num;
  });
  return tot;
}

console.log(sum.curry(4)(1)(6)(23)(10));
