//47. Write a JavaScript program to check whether a given number is presents in the range 40..10000.  Go to the editor For example 40 presents in 40 and 4000

const rangeNumber = (a, b, c) => {
  if (c < 40 || c > 4000) {
    return false;
  } else if (c >= a && c >= b) {
    return true;
  } else {
    return false;
  }
};

console.log(rangeNumber(55, 4100, 39));
