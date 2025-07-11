const fs = require('fs');
const path = require('path');

const dirPath = './';

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);

        fs.stat(fullPath, (err, stats) => {
            if (err) {
                console.error('Error getting file info:', err);
                return;
            }

            if (stats.isFile()) {
                console.log('-------------------------');
                console.log('File:', file);
                console.log('Size:', stats.size, 'bytes');
                console.log('Extension:', path.extname(file));
                console.log('Created At:', stats.birthtime);
            }
        });
    });
});
