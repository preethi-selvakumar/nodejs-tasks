const fs = require('fs');

fs.readFile('task5.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
    }
    else {
        fs.writeFile('output.txt', data, 'utf8', (err) => {
            if (err) {
                console.error("Error writing file:", err.message);
            }
            else {
                console.log("File copied successfully.");
            }
        });
    }
});
