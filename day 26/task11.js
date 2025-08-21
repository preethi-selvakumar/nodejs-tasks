const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => {
    console.log('Workflow started...');
    emitter.emit('step1');
});

emitter.on('step1', () => {
    console.log('Step 1 completed.');
    emitter.emit('step2');
});

emitter.on('step2', () => {
    console.log('Step 2 completed.');
    emitter.emit('end');
});

emitter.on('end', () => {
    console.log('Workflow finished!');
});

emitter.emit('start');
