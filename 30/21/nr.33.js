//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const range = (x, y) => {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(range(30, 45));
console.log(range(45, 100));
