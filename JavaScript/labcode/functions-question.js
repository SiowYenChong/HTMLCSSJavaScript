

/* For all the solutions in for-loop-question.js, rewrite the code as functions and invoke the functions.
 */
// Q1: Find the factorial of a number stored in a variable
function calculateFactorial(number) {
    let factorial = 1;
  
    for (let i = number; i >= 1; i--) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  const number = 5;
  const factorialResult = calculateFactorial(number);
  console.log(`Factorial of ${number} is ${factorialResult}`);

  // Q2: Calculate the total of numbers divisible by x between y and z
function calculateDivisibleTotal(x, y, z) {
    let total = 0;
  
    for (let i = y; i <= z; i++) {
      if (i % x === 0) {
        total += i;
      }
    }
  
    return total;
  }
  
  const xValue = 5;
  const yValue = 20;
  const zValue = 40;
  const divisibleTotal = calculateDivisibleTotal(xValue, yValue, zValue);
  console.log(`Total of numbers divisible by ${xValue} between ${yValue} and ${zValue} is ${divisibleTotal}`);

  // Q3: Create a table of values using powers
console.log("n\tn^2\tn^3\tn^4");
function generatePowersTable() {
  for (let n = 1; n <= 5; n++) {
    console.log(`${n}\t${n ** 2}\t${n ** 3}\t${n ** 4}`);
  }
}

generatePowersTable();

// Q4: Display a pattern of '*' based on the number of rows
function displayPattern(numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++) {
      let row = "";
  
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
  
      console.log(row);
    }
  }
  
  const patternNumber = 4;
  displayPattern(patternNumber);
 