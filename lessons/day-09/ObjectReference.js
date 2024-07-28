
let firstObj = {
    fName: "First Name",
    fAge: 20
}

// let secondObj = firstObj
// secondObj.fAge = 21
// secondObj.fName = "Second Name"

// console.log(firstObj.fAge);     //=> 21
// console.log(firstObj.fName);    //=> Second Name

//Shallow copy using Spread syntax
let thirdObj = { ...firstObj }
thirdObj.fName = "Third Name"
thirdObj.fAge = 30

console.log(firstObj)
console.log(thirdObj);

let fourthObj = { ...firstObj, ...thirdObj }
console.log(fourthObj);
