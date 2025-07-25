const fs = require('fs');

const fileName = 'data.json';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        console.log('Parsed JSON data:', jsonData);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});
