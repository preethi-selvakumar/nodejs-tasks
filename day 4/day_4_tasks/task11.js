const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('start', () => {
    console.log('Start event triggered');
});

emitter.emit('start');
