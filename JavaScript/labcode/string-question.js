

/* Q1. Create a array of 10 random strings of varying lengths (including a few that are longer than 8 characters). 
Using the filter higher order array function, find the strings that are longer than 8 characters. */
const randomStrings = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grapefruit",
    "honeydew",
    "kiwi",
    "lemon"
  ];
  // Use the filter method to create a new array containing only strings longer than 8 characters
  const longStrings = randomStrings.filter((string) => string.length > 8);
  console.log("Long strings >8 chraracters: ", longStrings);

/* Q2. Create a 2-dimensional array of 3 rows and variable number of columns. 
The first element in each row is a string, and the remaining elements are the individual characters of that string (resulting in a variable number of columns). 
As an example below, the first 2 rows have 5 columns each, while the last row has 8 columns.

horse	    h	o	r	s	e				
snake	    s	n	a	k	e				
elephant	e	l	e	p	h	a	n	t	

 */
// Use the filter method to create a new array containing only strings longer than 8 characters
const twoDArray = [
    ["horse", "h", "o", "r", "s", "e"],
    ["snake", "s", "n", "a", "k", "e"],
    ["elephant", "e", "l", "e", "p", "h", "a", "n", "t"]
];
console.log("2D Array: ", twoDArray);




/* Q3. Write a program to check whether a string is a palindrome. 
A string is called a palindrome if the reverse of that string is the same as the original string. For e.g. radar, level, etc */
function isPalindrome(str){
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]+/g, "");
    // Reverse the string and compare it to the original string
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
console.log("Is 'racecar' a palindrome? ", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome? ", isPalindrome("hello"));

/* Q4. Copy a random block of text from a web article. Identify the 3 words that occur the most frequently in that random block of text. */
const text = "This is a random block of text. This block of text contains random words. Random text can be interesting!"
// Extract words and convert them to lowercase
const words = text.toLowerCase().match(/\w+/g);
const wordCount = {};

//Count freq
words.forEach((word) => {
    if (wordCount[word]) {
        wordCount[word]++;
    } else {
        wordCount[word] = 1;
    }
});
const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);
const topWords = sortedWords.slice(0, 3);
console.log("Top 3 words: ", topWords);
