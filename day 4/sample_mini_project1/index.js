const fs = require('fs');
const os = require('os');
const path = require('path');

// Use path.join() to create log file path 
const logFilePath = path.join(__dirname, 'server_log.txt');

// Function to format timestamp
function getTimestamp() {
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 8);
    return `[${date} ${time}]`;
}

let count = 0; // Track how many logs are written

// Use setInterval() to log every 10 seconds 
const intervalId = setInterval(() => {
    // Use os.uptime() to get uptime in seconds 
    const uptime = os.uptime();

    const log = `${getTimestamp()} Uptime: ${uptime} seconds\n`;

    // Use fs.appendFile() to store logs 
    fs.appendFile(logFilePath, log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        } else {
            console.log("Logged:", log.trim());
        }
    });

    count++;

    // Stop logging after 3 entries
    if (count === 3) {
        clearInterval(intervalId);
        console.log("Logging complete. Stopped after 3 entries.");
    }
}, 10000); 
