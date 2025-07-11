const fs = require('fs');

fs.stat('task1log.txt', (err, stats) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`File Size: ${stats.size} bytes`);
        console.log(`Created At: ${stats.birthtime}`);
    }
});
