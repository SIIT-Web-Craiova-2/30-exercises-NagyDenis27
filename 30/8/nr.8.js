//8. Write a JavaScript program where the program takes a random integer between 1 to 10,
//8. Write a JavaScript program where the program takes a random integer between 1 to 10,
//the user is then prompted to input a guess number.
// If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

const guessTheNumber = () => {
  const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let user = window.prompt("Please type a guess number!");
  let program = integers[Math.floor(Math.random() * integers.length)];
  if (user === program) {
    console.log("Good Work");
  } else console.log("Not matched");
};
