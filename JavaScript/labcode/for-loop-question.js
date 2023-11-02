/* Q1. The factorial of a number x! is the product of all whole numbers from the chosen number down to 1.
For e.g. 
4! = 4 x 3 x 2 x 1 = 24
7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
Find the factorial of a number that is stored in a variable */
const number = 5;  // Define a variable 'number' and set it to 5.
let factorial = 1; // Initialize a variable 'factorial' to 1, this will store the factorial value.

// Loop to calculate the factorial of 'number'
for (let i = number; i >= 1; i--) {
  factorial *= i; // Multiply 'factorial' by 'i' in each iteration.
}




/* Q2. Create three variables x, y and z (you can give them other names if you wish). 
Calculate the total of all numbers perfectly divisible by x that are between y and z. 
For e.g. if  x is 5, and y and z are 20 and 40 respectively, then the total = 20 + 25 + 30 + 35 + 40.  
 */
const x = 5;     // Define a divisor 'x'.
const y = 20;    // Define the starting range 'y'.
const z = 40;    // Define the ending range 'z'.
let total = 0;   // Initialize 'total' to store the sum of numbers divisible by 'x'.

// Loop to check and sum numbers divisible by 'x' within the range [y, z]
for (let i = y; i <= z; i++) {
  if (i % x === 0) { // If 'i' is perfectly divisible by 'x'
    total += i;      // Add 'i' to 'total'.
  }
}

console.log(`Total of numbers divisible by ${x} between ${y} and ${z} is ${total}`); // Output the result




/* Q3. The ^ sign is used to indicate the use of power (for e.g. 2^3 means 2 x 2 x 2 which gives us 8). Write a program that creates the output below:

n n^2 n^3 n^4
1 1   1   1
2 4   8   16
3 9   27  81
4 16  64  256
5 25  125 625 

Hint: You need to use nested loops. 
You can use the \t escape character for tabs to space out the words and numbers in the display
*/
console.log("n\tn^2\tn^3\tn^4"); // Output table headers
for (let n = 1; n <= 5; n++) {
    console.log(`${n}\t${n ** 2}\t${n ** 3}\t${n ** 4}`);
    // Output values of 'n', 'n^2', 'n^3', and 'n^4' separated by tabs.
  }



/* Q4. Create a variable and store a number in it. This number will determine the output pattern to be displayed as follows:
If the number is 3, the output to be displayed is :

*  
* *  
* * *

If the number is 4, the output to be displayed is :

*  
* *  
* * *
* * * *

If the number is 5, the output to be displayed is :

*  
* *  
* * *
* * * *
* * * * *

Write a program to accomplish this. */
const patternNumber = 4;  // Define the number of rows in the pattern
for (let i = 1; i <= patternNumber; i++) {
    let row = ""; // Initialize an empty string for each row.
    
    // Loop to add '*' to 'row' based on the row number.
    for (let j = 1; j <= i; j++) {
      row += "* "; // Add '*' and a space to 'row'.
    }
    
    console.log(row); // Output each row of the pattern.
  }