const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    sayHello(name) {
        this.emit('hello', name);
    }
}

const myEmitter = new MyEmitter();

myEmitter.on('hello', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.sayHello('Preethi');
