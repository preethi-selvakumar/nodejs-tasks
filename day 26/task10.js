const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (err) => {
    console.log(`Error occurred: ${err.message}`);
});

emitter.emit('error', new Error('Something went wrong!'));
