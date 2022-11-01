//10. Write a JavaScript program to calculate multiplication and division of
// two numbers from input

const multiply = () => {
  let nr1 = document.querySelector("#firstNumber").value;
  let nr2 = document.querySelector("#secondNumber").value;
  document.querySelector("#result").innerHTML = nr1 * nr2;
};

const divide = () => {
  let nr1 = document.querySelector("#firstNumber").value;
  let nr2 = document.querySelector("#secondNumber").value;
  document.querySelector("#result").innerHTML = nr1 / nr2;
};
