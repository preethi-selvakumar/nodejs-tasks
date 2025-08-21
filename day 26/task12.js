const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('test', () => {
    console.log('Listener 1 running');
});

emitter.on('test', () => {
    console.log('Listener 2 running');
});

console.log('Listener count:', emitter.listenerCount('test'));
