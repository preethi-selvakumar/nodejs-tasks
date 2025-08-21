const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('done', () => {
    console.log('Asynchronous operation completed!');
});

console.log('Starting async operation...');

setTimeout(() => {
    emitter.emit('done');
}, 2000);
