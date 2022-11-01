//74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

const ArrayNumbers = (numbers) => {
  let max = numbers[0] > numbers[2] ? numbers[0] : numbers[2];

  numbers[0] = max;
  numbers[1] = max;
  numbers[2] = max;
  return numbers;
};

console.log(ArrayNumbers([10, 15, 20]));
console.log(ArrayNumbers([-10, -15, -20]));
console.log(ArrayNumbers([15, 13, 1]));
