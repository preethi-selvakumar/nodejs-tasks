const EventEmitter = require('events');
const chat = new EventEmitter();

// User 1 listener
chat.on('message', (msg) => {
    console.log(`Preethi received: ${msg}`);
});

// User 2 listener
chat.on('message', (msg) => {
    console.log(`Nandhini received: ${msg}`);
});

// Broadcast message
chat.emit('message', 'Hello everyone!');
