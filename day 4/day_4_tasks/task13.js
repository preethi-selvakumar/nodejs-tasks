const fs = require('fs');
const events = require('events');

const emitter = new events.EventEmitter();
const fileToWatch = 'task1log.txt';

emitter.on('fileChanged', () => {
    console.log(`${fileToWatch} has been modified`);
});

fs.watchFile(fileToWatch, (curr, prev) => {
    emitter.emit('fileChanged');
});
