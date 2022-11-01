//44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

const check = (a, b, c) => {
  return (
    (a >= 20 && (a < b || b < c)) ||
    (b >= 20 && (b < a || b < c)) ||
    (c >= 20 && (c < b || c < a))
  );
};

console.log(check(20, 30, 2));
