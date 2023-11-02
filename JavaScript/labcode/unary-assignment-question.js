

/* Q1: Declare a variable and store a number value in it. Use that variable in a mathematical expression involving the prefix increment operator and output the result of the expression. Explain your result based on your understanding of how the operator works. */
let num1 = 5;
let result1 = ++num1;
console.log(result1); // Output: 6

/* Q2: Declare a variable and store a number value in it. Use that variable in a mathematical expression involving the postfix increment operator and output the result of the expression. Explain your result based on your understanding of how the operator works. */
let num2 = 5;
let result2 = num2++;
console.log(result2); // Output: 5

/* Q3: Declare 3 variables and store random numbers into them. Use the += operator on any of the 2 variables, output and explain the result. */
let a = 3;
let b = 7;
let c = 4;
a += b; // Equivalent to a = a + b;
console.log(a); // Output: 10

/* Q4: Use the -= operator on any of the 2 previously declared variables, output and explain the result. */
c -= a; // Equivalent to c = c - a;
console.log(c); // Output: -6


/* Q5: Use the *= operator on any of the 2 previously declared variables, output and explain the result. */
b *= a; // Equivalent to b = b * a;
console.log(b); // Output: 70

