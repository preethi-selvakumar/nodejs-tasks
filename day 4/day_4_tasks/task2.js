const fs = require('fs');

const log = `Log entry at ${new Date().toISOString()}\n`;

fs.appendFile('task2log.txt', log, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Log appended successfully');
    }
});
