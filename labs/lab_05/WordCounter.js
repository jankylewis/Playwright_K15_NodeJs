const userString = require('readline-sync').question('Enter your String: ');

let wordsSplitted = userString.split(' ');
let wordCounts = {}

for (word of wordsSplitted) 
    wordCounts[word] = (wordCounts[word] || 0) + 1;

console.log(wordCounts);

