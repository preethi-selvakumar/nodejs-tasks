const fs = require('fs');
const path = require('path');
const events = require('events');

const eventEmitter = new events.EventEmitter();
const logFile = path.join(__dirname, 'events.log');

eventEmitter.on('task', (msg) => {
    const log = `${new Date().toISOString()} - ${msg}\n`;
    fs.appendFile(logFile, log, (err) => {
        if (err) console.error('Log error:', err);
    });
});

const action = process.argv[2];
const task = process.argv.slice(3).join(' ');

if (action && task) {
    if (action === 'add') {
        eventEmitter.emit('task', `Task added: ${task}`);
        console.log(`Added: ${task}`);
    } else if (action === 'complete') {
        eventEmitter.emit('task', `Task completed: ${task}`);
        console.log(`Completed: ${task}`);
    } else if (action === 'delete') {
        eventEmitter.emit('task', `Task deleted: ${task}`);
        console.log(`Deleted: ${task}`);
    } else {
        console.log('Invalid action. Use add, complete, or delete');
    }
} else {
    console.log('Usage: node miniproject2.js [add|complete|delete] "task name"');
}
