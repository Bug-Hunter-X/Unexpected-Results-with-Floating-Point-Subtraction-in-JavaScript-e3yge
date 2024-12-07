function myFunction(a, b) {
  return Math.round((a - b) * 100) / 100; // Round to 2 decimal places
}

console.log(myFunction(10.123, 5.456)); // Output: 4.67
console.log(myFunction(5.25, 10.75)); // Output: -5.5
// Consider using a library for arbitrary-precision arithmetic for more demanding applications.