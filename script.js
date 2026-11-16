// Step 1: External script connection check
console.log("script.js is running");

// Step 2: Two variables without values printed before assignment
var first;
let second;

console.log(first);
console.log(second);

// Step 3: Operations on numbers 12 and 4
const num1 = 12;
const num2 = 4;

console.log(num1 * num2);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 + "" + num2);
console.log(num1 + "$" + num2);

// Step 4 (Bonus): Function returning the arithmetic average of two numbers
function average(a, b) {
  return (a + b) / 2;
}

console.log(average(num1, num2));
