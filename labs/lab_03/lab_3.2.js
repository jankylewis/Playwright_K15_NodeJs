let intArr = [1, 2, 3, 4, 5]

let min = intArr[0]
let max = intArr[0]

intArr.forEach(int => {
    if (int < min)
        min = int
    if (int > max)
        max = int
})

console.log("The maximum: " + max)
console.log("The minimum: " + min)