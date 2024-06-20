const readline = require("readline-sync");
let clientAge = Number(readline.question("Your age: "));

if (clientAge < 18)
    console.log("WE DO NOT SELL!    ");
else if (clientAge >= 18 && clientAge <= 55)
    console.log("UNLIMITED TO SELL!    ");
else
    console.log("TWO OF THOSE TO BE SELL!    ");

