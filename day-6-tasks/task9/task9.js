const fs = require('fs');

const files = ['file1.txt', 'file2.txt', 'file3.txt'];
let completed = 0;

files.forEach((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${file}:`, err.message);
        }
        else {
            console.log(`${file} content:\n${data}\n`);
        }

        completed++;

        if (completed === files.length) {
            console.log("All files read successfully.");
        }
    });
});
