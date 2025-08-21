const EventEmitter = require('events');
const emitter = new EventEmitter();

function greetListener() {
    console.log('Hello from listener!');
}

emitter.on('greet', greetListener);

emitter.off('greet', greetListener);

emitter.emit('greet'); 
