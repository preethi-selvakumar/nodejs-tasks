const fs = require('fs');

fs.readFile('task3.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
    } 
    else {
        console.log("File contents:", data);
    }
});
