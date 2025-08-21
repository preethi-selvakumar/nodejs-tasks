const fs = require('fs');

const readableStream = fs.createReadStream('miniProject1_input.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('File Content:', chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading the file.');
});

readableStream.on('error', (err) => {
    console.error('Error:', err.message);
});
