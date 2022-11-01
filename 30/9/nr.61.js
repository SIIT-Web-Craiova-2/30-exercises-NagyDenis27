//Write a JavaScript program to concatenate two strings except their first character

const concatenate = (string1, string2) => {
  string1 = string1.substring(1, string1.length);
  string2 = string2.substring(1, string2.length);
  console.log(string1 + string2);
};

console.log(concatenate("Nagy", "Denis"));
console.log(concatenate("N", "D"));
console.log(concatenate("Bayern", "München"));
