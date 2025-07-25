const fs = require('fs');

const fileName = 'task7.txt';

fs.unlink(fileName, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log(`${fileName} deleted successfully.`);
});
