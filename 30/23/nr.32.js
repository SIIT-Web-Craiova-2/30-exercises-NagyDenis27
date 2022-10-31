//32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const nearValue = (a, b) => {
  if (a != b) {
    var a1 = Math.abs(x - 100);
    var b1 = Math.abs(y - 100);

    if (a1 < b1) {
      return b;
    }
    if (b1 < a1) {
      return b;
    }
    return 0;
  } else return false;
};

console.log(nearValue(80,90))
console.log(nearValue(-150,-10))