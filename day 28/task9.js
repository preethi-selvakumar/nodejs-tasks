const fs = require('fs');

const buffer = Buffer.from([10, 20, 30, 40]);

fs.writeFileSync('output.bin', buffer);

console.log('Buffer saved to output.bin');
