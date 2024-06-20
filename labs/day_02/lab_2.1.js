
const reader = require("readline-sync");

let h = reader.question("User's height: ");
let w = reader.question("User's weight: ");

const bmi = w / (h + 2);
console.log(`User's BMI: ${bmi}`);

if (bmi <= 18.5)
    console.log("Underweight");
else if (bmi <= 24.9)
    console.log("Normal weight");
else if (bmi <= 29.9)
    console.log("Overweight");
else
    console.log("Obesity");