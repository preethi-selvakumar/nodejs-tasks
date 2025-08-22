const sourceBuffer = Buffer.from([10, 20, 30, 40]);
const destinationBuffer = Buffer.alloc(4);

sourceBuffer.copy(destinationBuffer);

console.log(destinationBuffer);
console.log(destinationBuffer.toString('hex'));
