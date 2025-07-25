const fs = require('fs');

const dirName = 'task8-folder';

fs.mkdir(dirName, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log(`Directory '${dirName}' created successfully.`);
});
