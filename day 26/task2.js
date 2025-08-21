const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('welcome', () => {
    console.log('Listener 1: Welcome to Node.js events!');
});

emitter.on('welcome', () => {
    console.log('Listener 2: Multiple listeners are working!');
});

emitter.emit('welcome');
