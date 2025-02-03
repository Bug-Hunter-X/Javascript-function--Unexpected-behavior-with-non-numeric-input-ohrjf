function checkNumber(num) {
  if (typeof num !== 'number') {
    return "Invalid input: Please provide a number";
  } else if (num > 10) {
    return "The number is greater than 10";
  } else if (num < 10) {
    return "The number is less than 10";
  } else {
    return "The number is equal to 10";
  }
}

console.log(checkNumber(10)); // Output: The number is equal to 10
console.log(checkNumber(5));  // Output: The number is less than 10
console.log(checkNumber(15)); // Output: The number is greater than 10
console.log(checkNumber("hello")); // Output: Invalid input: Please provide a number
console.log(checkNumber(true)); // Output: Invalid input: Please provide a number