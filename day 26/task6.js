const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('details', (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
});

emitter.emit('details', 'Preethi', 25);
