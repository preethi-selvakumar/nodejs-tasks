const fs = require('fs');

const buffer = fs.readFileSync('audio.mp3');

console.log('Buffer length:', buffer.length);
