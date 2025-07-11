const fs = require('fs');

const fileName = 'task4.txt';

// Step 1: Create the file
fs.writeFile(fileName, 'This file will be deleted.', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`I created the file: ${fileName}`);

    // Step 2: Delete the file
    fs.unlink(fileName, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Deleted the file: ${fileName}`);
        }
    });
});
