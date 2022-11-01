//22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

const remCharacter = (string, charPosition) => {
  let x = string.substring(0, charPosition);
  let = string.substring(charPosition + 1, string.length);
  return x + y;
};

console.log(remCharacter("Scoalainformala", 0));
console.log(remCharacter("Scoalainformala", 1));
console.log(remCharacter("Scoalainformala", 2));
console.log(remCharacter("Scoalainformala", 8));
