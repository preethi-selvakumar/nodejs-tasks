const fs = require('fs');

const content = 'Hello from Task 4! This file was created using fs.writeFileSync.';

try {
    fs.writeFileSync('task4.txt', content, 'utf8');
    console.log('File written successfully!');
}
catch (err) {
    console.error('Error writing to file:', err);
}
