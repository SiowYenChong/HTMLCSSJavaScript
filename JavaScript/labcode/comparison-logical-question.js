
/* Q1: Declare 4 variables and store random numbers into all of them. Make sure 2 of these variables have identical values */
const num1 = 5;
const num2 = 7;
const num3 = 5;
const num4 = 3;

/* Q2: Use any 2 of these variables in an expression involving the <= operator and explain the result */
const result1 = num1 <= num2; // true, 5 is less than or equal to 7
console.log(result1);

/* Q3: Use any 2 of these variables in an expression involving the >= operator and explain the result */
const result2 = num3 >= num4; // true, 5 is greater than or equal to 3
console.log(result2);


/* Q4: Use any 2 of these variables in an expression involving the === operator and explain the result */
const result3 = num1 === num3; // true, both num1 and num3 have the same value, which is 5
console.log(result3);


/* Q5: Declare 4 variables and store random strings into all of them. Make sure that 2 of these variables have the same string value. */
const str1 = "apple";
const str2 = "banana";
const str3 = "cherry";
const str4 = "apple";


/* Q6: Use any 2 of these string variables in an expression 
involving the <= operator and explain the result */
const result4 = str1 <= str2; // true, "apple" comes before "banana" alphabetically
console.log(result4);

/* Q7: Use any 2 of these string variables in an expression involving the >= operator and explain the result */
const result5 = str2 >= str3; // false, "banana" does not come after "cherry" alphabetically
console.log(result5);


/* Q8: Use any 2 of these string variables in an expression involving the === operator and explain the result */
const result6 = str1 === str4; // true, both str1 and str4 have the same string value, which is "apple"
console.log(result6);



/* Q9: Use all 4 variables with numeric content from Q1 in an expression that uses the && operator as well as the === and <= operators. Explain your result */
const result7 = num1 === num3 && num2 <= num4; // false, num1 and num3 are equal (true), but num2 is not less than or equal to num4 (false)
console.log(result7);

/* Q10: Substitute different variables into the previous expression (without changing the operators used) so that the final result is different from the original result (i.e. if the original result is false, the new result is true, and vice versa). */
const result8 = num1 === num2 && num3 <= num4; // false, num1 is not equal to num2 (false), and num3 is less than or equal to num4 (true)
console.log(result8);



/* Q11: Use all 4 variables with numeric content in an expression that uses the || operator as well as the > and < operators. Explain your result */
const result9 = num1 > num2 || num3 < num4; // true, num1 is not greater than num2 (false), but num3 is less than num4 (true), so one condition being true makes the entire expression true
console.log(result9);


/* Q12: Substitute different variables into the previous expression (without changing the operators used) so that the final result is different from the original result (i.e. if the original result is false, the new result is true, and vice versa). */
const result10 = num2 > num4 || num1 < num3; // true, num2 is greater than num4 (true), and num1 is less than num3 (true), so one condition being true makes the entire expression true
console.log(result10);