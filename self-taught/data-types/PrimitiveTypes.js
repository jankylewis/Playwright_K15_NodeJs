//Number
let age = 30;
let pi = 3.14159;

//Undefined
let undefinedVar
// fLog(typeof undefinedVar);

let uniqueId = Symbol("myUniqueId");
// fLog(uniqueId);
// fLog(typeof uniqueId);

//BigInt
let largeNumber = 9n;
fLog(largeNumber)
fLog(typeof largeNumber)
fLog(largeNumber * largeNumber)

//Null
let emptyObj = null
fLog(typeof emptyObj);

function fLog(data){
    console.log(data);
}