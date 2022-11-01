//  4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let x = 5,
  y = 6,
  z = 7;
let s = (x + y + z) / 2;
let a = Math.sqrt(s * (s - x) * (s - y) * (s - z));
console.log("The area of a triangle is: " + a);
