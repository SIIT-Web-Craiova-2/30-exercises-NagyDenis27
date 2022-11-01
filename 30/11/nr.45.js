//45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

const integers = (x, y) => {
  if (x == 15 || y == 15) {
    return true;
  } else if (x + y == 15) {
    return true;
  } else if (x - y == 15 || y - x == 15) {
    return true;
  } else {
    return false;
  }
};
console.log(integers(1, 20));
console.log(integers(2, 30));
console.log(integers(40, 5));
console.log(integers(60, 14));
