const _ = require('lodash');

const arr = [];
for (let i = 1; i <= 30; i++) {
    arr.push(i);
}

console.log("Original Array:", arr);

const chunked = _.chunk(arr, 2);
const shuffled = _.shuffle(arr);

console.log("Chunked:", chunked);
console.log("Shuffled:", shuffled);
