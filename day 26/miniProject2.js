const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('orderPlaced', (orderId, item, amount) => {
    console.log(`Order Received!`);
    console.log(`Order ID: ${orderId}`);
    console.log(`Item: ${item}`);
    console.log(`Amount: ₹${amount}`);
});

emitter.emit('orderPlaced', 101, 'Laptop', 55000);
