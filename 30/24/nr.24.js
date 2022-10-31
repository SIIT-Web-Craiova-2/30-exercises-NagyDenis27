// 24Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

const frontBackString = (string) => {
  let str = string.substring(0, 1);
  return str + string + str;
};

console.log(frontBackString("a"));
console.log(frontBackString("ab"));
console.log(frontBackString("abc"));
