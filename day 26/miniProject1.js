const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('data', (timestamp) => {
    console.log(`Data event at: ${timestamp}`);
});

setInterval(() => {
    const now = new Date().toLocaleTimeString();
    emitter.emit('data', now);
}, 1000);
