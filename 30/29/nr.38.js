//38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

const marks = (totalmarks, exam) => {
  if (exam) {
    return totalmarks >= 90;
  }
  return totalmarks >= 89 && totmarks <= 100;
};

console.log(marks("78", " "));
console.log(marks("89", "true "));
console.log(marks("99", "true "));
