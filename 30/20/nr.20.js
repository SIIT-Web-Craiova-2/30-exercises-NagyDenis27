//20.Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

const negativePositive = (neg, pos) => {
  const a = neg;
  const b = pos;
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  } else return false;
};
console.log(negativePositive(1, -2));
console.log(negativePositive(-2, 3));
console.log(negativePositive(4, 5));
console.log(negativePositive(6, -5));
