//39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const int = (a, b) => {
  let x = a + b;
  if (x >= 50 && x <= 80) {
    return 65;
  } else {
    return 80;
  }
};
console.log(int(1, 20));
console.log(int(30, 99));
console.log(int(40, 52));
