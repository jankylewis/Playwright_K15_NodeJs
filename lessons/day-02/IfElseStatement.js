
const readline = require('readline-sync');
//
// let name = readline.question('Name: ');
// let age = readline.question('Age: ');
//
// let nextYearAge = Number(age) + 1;
//
// console.log(`${name} ${age}`);
// console.log(`${nextYearAge}`);
//
//

let arrivalTime = readline.question('arrivalTime: ');
let isHeOnTime = arrivalTime == 7;

if(isHeOnTime)
    console.log("Let's talk!");
else
    console.log("Let's write me a letter!");

//Ternary operator
let msg = isHeOnTime ?  "Let's talk!" : "Let's write me a letter!";
console.log(msg);






