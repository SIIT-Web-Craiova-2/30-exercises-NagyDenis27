//26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

const frontBack = (string) => {
  if (string.length >= 3) {
    let back = string.substring(string.length - 3);
    return back + string + back;
  }
};

console.log(frontBack("abc"));
console.log(frontBack("ab"));
console.log(frontBack("abcd"));
