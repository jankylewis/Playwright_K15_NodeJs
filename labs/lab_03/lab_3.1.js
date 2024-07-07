let intArr  = [1, 2, 3, 4, 5]

let totalOddNumber = 0
let totalEvenNumber = 0

intArr.forEach(int => {
    if (int % 2 === 0){
        totalEvenNumber++
        return
    }

    totalOddNumber++
})

console.log("Even numbers: " + totalEvenNumber)
console.log("Odd numbers: " + totalOddNumber)