//.16 Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

const compute = (int1, int2) => {
  if (int1 === int2) {
    return 3 * (int1 + int2);
  }
};
const sum = compute(10, 10);
console.log(sum);
