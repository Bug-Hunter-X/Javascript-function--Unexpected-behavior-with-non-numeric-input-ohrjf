function checkNumber(num) {
  if (num > 10) {
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