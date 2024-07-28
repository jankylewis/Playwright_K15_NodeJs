
//Object literal
let sth = {
    name: "Sth",
    "My age": 18
}

//Read object's property: dot notation, [] syntax
console.log(sth["My age"])
console.log(sth.name)

//Update
sth.name = "Sth else"
sth["My age"] = 30

console.log(sth["My age"])
console.log(sth.name)
console.log(sth)

//Destructure
const { name, ["My age"]: age } = sth

console.log(name)
console.log(age)

console.log(sth)