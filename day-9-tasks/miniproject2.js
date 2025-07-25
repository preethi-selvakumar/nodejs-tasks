const fs = require('fs');
const path = require('path');

// Create a function to log message with timestamp
function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    fs.appendFile('miniproject2.log', logEntry, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to log file:', err.message);
        } else {
            console.log('Log saved successfully.');
        }
    });
}

logMessage('User logged in');
logMessage('Something went wrong!');
