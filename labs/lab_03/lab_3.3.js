let numbers = [12, 34, 1, 16, 28]

for (let i = 0; i < numbers.length - 1; i++)
    for (let j = 0; j < numbers.length - 1; j++)
        if (numbers[j + 1] < numbers[j])
            [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]

console.log(`Sorted array: [${numbers.join(", ")}]`)