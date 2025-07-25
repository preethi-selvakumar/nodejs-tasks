const fs = require('fs');

try {
    const data = fs.readFileSync('task2.txt', 'utf8');
    console.log('File content:\n', data);
}
catch (err) {
    console.error('Error reading file:', err);
}
