const fs = require('fs');
const path = require('path');

const fileName = 'task6.txt';
const folderName = 'task6_output';
const sourcePath = path.join(__dirname, fileName);
const destPath = path.join(__dirname, folderName, fileName);

// Step 1: Create the file
fs.writeFile(fileName, 'This file will be moved.', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }

    console.log(`Created file: ${fileName}`);

    // Step 2: Create the folder 
    fs.mkdir(folderName, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Folder "${folderName}" created successfully`);

        // Step 3: Move the file
        fs.rename(sourcePath, destPath, (err) => {
            if (err) {
                console.error('Error moving file:', err);
            } else {
                console.log(`Moved ${fileName} to ${folderName}/`);
            }
        });
    });
});
