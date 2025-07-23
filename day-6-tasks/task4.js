const fs = require('fs');

const content = 'This is the content for task4.txt written using fs.writeFile.';

fs.writeFile('task4.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err.message);
    } 
    else {
        console.log('File written successfully.');
    }
});
