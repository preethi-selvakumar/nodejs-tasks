const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log('Hello! Event triggered successfully.');
});

emitter.emit('greet');
