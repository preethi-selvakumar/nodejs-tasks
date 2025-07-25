const fs = require('fs');

// Step 1: Get filename from command-line arguments
const filename = process.argv[2]; // 0 = node, 1 = script name, 2 = actual input

// Step 2: Check if user gave a filename
if (!filename) {
    console.log('Please provide a filename as an argument.');
    process.exit(1); // Exit the program with error
}

// Step 3: Read the file asynchronously
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('File Content:\n');
    console.log(data);
});
