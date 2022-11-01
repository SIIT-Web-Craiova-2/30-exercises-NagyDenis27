//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function checktrue(a, b) {
  var sumtrue = a + b;
  if (a === 50 || b === 50 || sumtrue === 50) {
    return true;
  }
}
console.log(checktrue(50, 0));
console.log(checktrue(50, 50));
console.log(checktrue(7, 48));
console.log(checktrue(15, 15));
console.log(checktrue(-40, 78));
console.log(checktrue(78, -25));
