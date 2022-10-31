//27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

const check = (str) => {
  if (str.length < 4) {
    return false;
  }
  let string = str.substring(0, 4);
  if (string === "Java") {
    return true;
  } else {
    return false;
  }
};
console.log(check("Java"));
console.log(check("JavaScript"));
console.log(check("I am hungry"));
