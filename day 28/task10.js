const fs = require('fs');

const buffer = fs.readFileSync('output.bin');

console.log(buffer);
console.log(buffer.toString('hex'));
