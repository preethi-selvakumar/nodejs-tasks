const fs = require('fs');

function logMessage(message) {
    const timestamp = new Date().toISOString(); 
    const logEntry = `[${timestamp}] ${message}\n`;

    fs.appendFile('task12.log', logEntry, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to log file:', err.message);
            return;
        }
        console.log('Log entry added.');
    });
}

logMessage('Server started.');
logMessage('User logged in.');
logMessage('Task 12 executed.');
