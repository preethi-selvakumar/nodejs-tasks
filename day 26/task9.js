const EventEmitter = require('events');
const emitter = new EventEmitter();

let count = 5;

emitter.on('tick', (timeLeft) => {
    console.log(`Time left: ${timeLeft}`);
});

const interval = setInterval(() => {
    emitter.emit('tick', count);
    count--;

    if (count < 0) {
        clearInterval(interval);
        console.log('Countdown finished!');
    }
}, 1000);
