const fs = require('fs');

fs.writeFile('task1log.txt', 'This is a sample log file.', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('log.txt created successfully');
    }
});
