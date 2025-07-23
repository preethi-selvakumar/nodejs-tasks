// --- Original code with nested callbacks (callback hell) 
const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) return console.error(err);

    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) return console.error(err);

        fs.writeFile('output.txt', data1 + data2, 'utf8', (err) => {
            if (err) return console.error(err);

            console.log('Done writing.');
        });
    });
});


// Refactored version with named functions (clean version) 
function readFile1() {
    fs.readFile('file1.txt', 'utf8', handleFile1);
}

function handleFile1(err, data1) {
    if (err) return console.error(err);
    fs.readFile('file2.txt', 'utf8', (err, data2) => handleFile2(err, data1, data2));
}

function handleFile2(err, data1, data2) {
    if (err) return console.error(err);
    fs.writeFile('output.txt', data1 + data2, 'utf8', handleWrite);
}

function handleWrite(err) {
    if (err) return console.error(err);
    console.log('Done writing.');
}

readFile1();


