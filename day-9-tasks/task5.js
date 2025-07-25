const fs = require('fs');

const content = '\nAppended from Task 5 using fs.appendFile.';

fs.appendFile('task5.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content appended successfully!');
});
