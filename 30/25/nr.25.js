//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

const multiple = (x) => {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(multiple(10));
console.log(multiple(20));
