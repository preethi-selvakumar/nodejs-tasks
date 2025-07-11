const fs = require('fs');
const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('start', () => {
    const message = 'Start event triggered\n';
    fs.appendFile('events.log', message, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Log written to events.log');
        }
    });
});

emitter.emit('start');
