
/* Q1: Create two variables and store random numbers in them (which can be either 0, positive or negative). Display the larger of these two numbers, and if they are equal, indicate that as well.
 */
const num1 = 8;
const num2 = 12;
if (num1 > num2) {
  console.log("The larger number is num1:", num1);
} else if (num2 > num1) {
  console.log("The larger number is num2:", num2);
} else {
  console.log("Both numbers are equal:", num1);
}

/* Q2: Create two variables and store random numbers in them (which can be either 0, positive or negative). Display the sign of the multiplication product of the two numbers. For e.g. if the first number is +ve and the second number is -ve, then the multiplication product is -ve (so you display the message negative or -ve). For your solution, you can write a statement to multiply the two variables using the * operator
 */
const num3 = 5;
const num4 = -3;
const product = num3 * num4;
if (product > 0) {
  console.log("The product is positive (+ve)");
} else if (product < 0) {
  console.log("The product is negative (-ve)");
} else {
  console.log("The product is zero");
}

/* Q3: Repeat Q2 but WITHOUT using a statement to multiply the two variables using the * operator
 */
const num5 = 7;
const num6 = -2;
if ((num5 > 0 && num6 > 0) || (num5 < 0 && num6 < 0)) {
  console.log("The product is positive (+ve)");
} else if (num5 === 0 || num6 === 0) {
  console.log("The product is zero");
} else {
  console.log("The product is negative (-ve)");
}



/* Q4: Create 3 variables and store random numbers in them (which can be either 0, positive or negative). Display the variable with the largest value
 */
const var1 = 15;
const var2 = -8;
const var3 = 10;
if (var1 >= var2 && var1 >= var3) {
  console.log("The largest variable is var1:", var1);
} else if (var2 >= var1 && var2 >= var3) {
  console.log("The largest variable is var2:", var2);
} else {
  console.log("The largest variable is var3:", var3);
}

/* Q5: Repeat Q4 except now display the variable with the smallest value
 */
if (var1 <= var2 && var1 <= var3) {
    console.log("The smallest variable is var1:", var1);
  } else if (var2 <= var1 && var2 <= var3) {
    console.log("The smallest variable is var2:", var2);
  } else {
    console.log("The smallest variable is var3:", var3);
  }


/* Q6: Create 3 variables and store random numbers in them (which can be either 0, positive or negative). Print out the variables in ascending order of their values (from smallest to largest)
 */
const num7 = -12;
const num8 = 8;
const num9 = -4;
if (num7 <= num8 && num7 <= num9) {
  console.log("Smallest to largest:", num7, num8, num9);
} else if (num8 <= num7 && num8 <= num9) {
  console.log("Smallest to largest:", num8, num7, num9);
} else {
  console.log("Smallest to largest:", num9, num7, num8);
}


/* Q7: Repeat Q6 but print in descending order (largest to smallest)
 */
if (num7 >= num8 && num7 >= num9) {
    console.log("Largest to smallest:", num7, num8, num9);
  } else if (num8 >= num7 && num8 >= num9) {
    console.log("Largest to smallest:", num8, num7, num9);
  } else {
    console.log("Largest to smallest:", num9, num7, num8);
  }


/* Q8: The algorithm for calculating whether a year is a leap year or not is outlined here:

https://www.wikihow.com/Calculate-Leap-Years

Create a variable to store a year as a number, and then indicate whether the year is a leap year or not
 */
const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year, "is a leap year");
} else {
  console.log(year, "is not a leap year");
}




