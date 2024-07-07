let firstArray = [1, 12, 16, 28, 34]
let secondArray = [1, 13, 16, 27, 99]

//Use Spread Operator
let mergedArray = [...firstArray, ...secondArray]

for (let i = 0; i < mergedArray.length - 1; i++)
    for (let j = 0; j < mergedArray.length - 1; j++)
        if (mergedArray[j + 1] < mergedArray[j])
            [mergedArray[j], mergedArray[j + 1]] = [mergedArray[j + 1], mergedArray[j]]

console.log(`The merged array after being sorted: [${mergedArray.join(", ")}]`)