const fs = require('fs');

// async read
fs.readFile('task1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('File content:', data);
});

// async write
fs.writeFile('task3.txt', 'Hello from Task 3!', 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err.message);
        return;
    }
    console.log('File written successfully.');
});

// async append
fs.appendFile('task5.txt', '\nAppended line', 'utf8', (err) => {
    if (err) {
        console.error('Error appending file:', err.message);
        return;
    }
    console.log('File appended successfully.');
});

// async delete
fs.unlink('task7.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err.message);
        return;
    }
    console.log('File deleted successfully.');
});

// sync read with try-catch
try {
    const content = fs.readFileSync('task2.txt', 'utf8');
    console.log('Sync Read:', content);
} catch (err) {
    console.error('Error in sync read:', err.message);
}

// sync write with try-catch
try {
    fs.writeFileSync('task4.txt', 'Written using writeFileSync', 'utf8');
    console.log('Sync Write successful.');
} catch (err) {
    console.error('Error in sync write:', err.message);
}

// create dir
fs.mkdir('task8-folder', (err) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.log('Directory already exists.');
        } else {
            console.error('Error creating directory:', err.message);
        }
        return;
    }
    console.log('Directory created.');
});

// parse json
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err.message);
        return;
    }
    try {
        const json = JSON.parse(data);
        console.log('Parsed JSON:', json);
    } catch (parseErr) {
        console.error('Invalid JSON format:', parseErr.message);
    }
});
