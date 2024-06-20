
const reader = require("readline-sync");

let number = Number(reader.question("Enter a number: "));

if (number % 2 === 0)
    console.log("It was an even number!  ");
else
    console.log("It was an odd number!  ");
