//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

const num = (x) => {
  if (x <= 19) {
    console.log(19 - x);
  } else {
    console.log((x - 19) * 3);
  }
};

console.log(num(7));
console.log(num(8));
console.log(num(19));
