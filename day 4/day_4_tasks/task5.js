const fs = require('fs');

fs.mkdir('output', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Folder "output" created successfully');
    }
});
