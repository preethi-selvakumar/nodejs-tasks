const fs = require('fs');

function readFileAsync() {
    console.log('Before reading file');

    fs.readFile('task3.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file');
            return;
        }
        console.log('During reading file');
        console.log(data);
    });

    console.log('After starting file read');
}

readFileAsync();
