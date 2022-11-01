//. Write a JavaScript program to reverse a given string.

const reverse = (string) => {
  return string.split("").reverse().join("");
};

console.log(reverse("NagyDenis"));
console.log(reverse("ScoalaInformala"));
