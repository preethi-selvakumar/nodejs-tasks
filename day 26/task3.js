const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('hello', () => {
    console.log('Hello event triggered - this will run only once.');
});

emitter.emit('hello');
emitter.emit('hello'); 
