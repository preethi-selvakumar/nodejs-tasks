const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('bye', () => {
    console.log('Listener 1: Goodbye!');
});

emitter.on('bye', () => {
    console.log('Listener 2: See you soon!');
});

// Remove all listeners for 'bye' event
emitter.removeAllListeners('bye');

emitter.emit('bye'); // No output, all listeners removed
