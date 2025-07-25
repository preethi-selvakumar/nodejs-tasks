const fs = require('fs');

const dirName = 'task8-folder';

fs.readdir(dirName, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log(`Contents of '${dirName}':`);
    files.forEach(file => {
        console.log(file);
    });
});
