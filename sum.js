function sum() {
  const args = Array.from(arguments);
  let summedVal = 0;
  args.forEach((el) => {
    summedVal += el;
  });
  return summedVal;
}

function sum2(...something) {
  let summedVal = 0;
  something.forEach((el) => {
    summedVal += el;
  });
  return summedVal;
}
