
/* Q1. Create an array of 10 numbers containing random positive and negative numbers. 
Find all the even numbers in this array and sum them up. 
 */
// Create an array of 10 random numbers
const numbers = [5,-2,11,8,-6,20,-1,4,7,10]
let sumOfEvens = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        sumOfEvens += numbers[i];
    }
}
console.log("Sum of even numbers in the array: "+sumOfEvens);

/* Q2. Create an array of 10 numbers containing random numbers. 
Create another array which contains the exact numbers from the first array, but with their order reverse. For e.g. 2,4,6,8 would now become 8,6,4,2.
JavaScript has an inbuilt method to generate random numbers between 1 and x. You can use this in your solution if you wish:
https://www.w3schools.com/jsref/jsref_random.asp */
const oriArray = [2,4,6,8,10,12,14,16,18,20];
const revArray = oriArray.slice().reverse();
console.log("Original Array: "+oriArray);
console.log("Reversed Array: "+revArray);

/* Q3. Create an array of 20 numbers containing random numbers, where some of these numbers are repeated: for e.g. 3, 5, 8, 5, 9, 3, etc. 
Identify the numbers that are duplicated and how many times they are duplicated (once, twice, three times, etc)
JavaScript has an inbuilt method to generate random numbers between 1 and x. You can use this in your solution if you wish:
https://www.w3schools.com/jsref/jsref_random.asp */
const numbersArray = [3, 5, 8, 5, 9, 3, 7, 12, 8, 6, 4, 2, 1, 7, 15, 5, 11, 4, 9, 10];
const duplicates = {};

numbersArray.forEach((number) => {
    if (duplicates[number] === undefined) {
        duplicates[number] = 1;
    } else {
        duplicates[number]++;
    }
});

console.log("Duplicates and their counts: ");
for (const num in duplicates) {
    if (duplicates[num] > 1) {
        console.log(`${num} is duplicated ${duplicates[num]} times`); // Use backticks for string interpolation
    }
}



/* Q4. Create 2 arrays with 10 elements each containing random strings (for e.g. names of animals, cities, cars, people, etc). 
Ensure that there are a few strings which are identical in these 2 arrays. Identify identical strings in both these arrays.
 */
// Create two arrays with random strings
const array1 = ["apple", "banana", "cherry", "date", "apple"];
const array2 = ["grape", "date", "kiwi", "apple", "pear"];

const identicalStrings = array1.filter((value) => array2.includes(value));
console.log("Identical strings: "+identicalStrings);

/* Q5. Create an array of 10 numbers containing random numbers. 
For every number that is more than 50, replace that number in its position with the number 888.
JavaScript has an inbuilt method to generate random numbers between 1 and x. You can use this in your solution if you wish:
https://www.w3schools.com/jsref/jsref_random.asp */
const numbersArray1 = [45, 60, 28, 72, 93, 52, 86, 110, 67, 77];

const updatedArray = numbersArray1.map((number) => {
    if (number > 50) {
        return 888;
    }
    return number;
});

console.log("Updated array: " + updatedArray);

/* Q6. Repeat Q3, except this time, delete the duplicate numbers, so that each number only appears exactly once in the array.
 */
const numbersArray2 = [3, 5, 8, 5, 9, 3, 7, 12, 8, 6, 4, 2, 1, 7, 15, 5, 11, 4, 9, 10];
const uniqueNumbers = [...new Set(numbersArray)];
console.log("Array with duplicates removed: " + uniqueNumbers);

/* Q7. Create an array of 5 elements containing string descriptions of numbers between 1 and 10, for e.g. ["six", "five", "three", "nine", "two"]. 
Using the map higher order array function, create a new array whose contents are the numerical equivalents of those string descriptions, for e.g. [6, 5, 3, 9, 2]
 */
const stringDescriptions = ["six", "five", "three", "nine", "two"];
const numericalEquivalents = stringDescriptions.map((description) =>{
    switch (description){
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine":
            return 9;
        case "ten":
            return 10;
        default:
            return 0; // Handle cases where descriptions are not recognized
        }
    });
    
    console.log("Numerical equivalents: " + numericalEquivalents);

/* Q8. Create a 2-dimensional array with 3 rows and 5 columns containing random numbers. 
Find the largest / smallest number in each row.
 */
const twoDArray = [
    [10, 8, 15, 23, 19],
    [4, 12, 6, 9, 20],
    [17, 5, 13, 2, 7],
];
const largestInRows = twoDArray.map((row) => Math.max(...row));
const smallestInRows = twoDArray.map((row) => Math.min(...row));

console.log("Largest in each row: " + largestInRows);
console.log("Smallest in each row: " + smallestInRows);


/* Q9. Extend the solution for Q1 from objects-question.js so that the customer record now looks like this. 
Use arrays to appropriate model the additional information provided. Ensure you include at least 3 items for the customer to purchase.

Name: Shang Chi
Age: 24
Bank Name: Ten Rings Bank
Bank Account No: 3-534454-2
Country of Residence: Ta Lo
Possible methods of payment: GrabPay, TouchNGo, Credit Card, Shopee Coins
Shopee Coins: 35000
Coin conversion rate: 0.04
Items purchased:
-	Item description: Power Rings
-	Unit price: 52.00
-	Quantity: 10
-	Rating: 4.2
-	Vendor: Marvel Cinematic Universe

-	Item description: Nunchaku
-	Unit price: 22.00
-	Quantity: 2
-	Rating: 4.8
-	Vendor: DC Universe

……
……
……
-	Item description: Double bladed light saber
-	Unit price: 88.00
-	Quantity: 1
-	Rating: 3.2
-	Vendor: Lucas Films

There is a new condition in place on the use of Shopee Coins.

The customer can only pay using Shopee Coins if this is included as one of his possible methods of payment AND the item(s) that he wishes to use Shopee Coins on has a rating of 4.5 and above.

Modify the previous method that you implemented to check again whether the customer is able to pay for part of his overall purchase using Shopee Coins alone. The cash equivalent of the Shopee Coins is obtained by multiplying it with the Coin conversion rate.

Call the object method and change the values for the possible methods of payment and rating for specific items being purchased to verify that it works correctly.

 */

let customer = {
    name: "Shang Chi",
    age: 24,
    bank: {
        name: "Ten Rings Bank",
        accountNo: "3-534454-2",
    },
    countryOfResidence: "Ta Lo",
    possibleMethodsOfPayment: ["GrabPay", "TouchNGo", "Credit Card", "Shopee Coins"],
    shopeeCoins: 35000,
    coinConversionRate: 0.04,
    itemsPurchased: [
        {
            description: "Power Rings",
            unitPrice: 52.00,
            quantity: 10,
            rating: 4.2,
            vendor: "Marvel Cinematic Universe",
        },
        // Add more items here
    ],
    canPayWithCoins: function () {
        let canPay = this.possibleMethodsOfPayment.includes("Shopee Coins");
        for (const item of this.itemsPurchased) {
            if (item.rating < 4.5) {
                canPay = false;
                break;
            }
        }
        return canPay;
    },
};

// Check if the customer can pay with Shopee Coins
console.log("Can the customer pay with Shopee Coins alone? " + customer.canPayWithCoins());