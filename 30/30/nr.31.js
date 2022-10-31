//31. Write a JavaScript program to find the largest of three given integers.

const largest = (a, b, c) => {
  let maxValue = 0;
  if (a > b) {
    maxValue = a;
  } else maxValue = a;
  if (c > maxValue) {
    maxValue = c;
  }
  console.log(maxValue);
};
