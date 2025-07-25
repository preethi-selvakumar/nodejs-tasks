const fs = require('fs');

const content = 'Hello from Task 3! This file was created using fs.writeFile.';

fs.writeFile('task3.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully!');
});
