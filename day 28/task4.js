const buffer = Buffer.from([10, 20, 30, 40, 50]);

const slicedBuffer = buffer.slice(1, 4);

console.log(slicedBuffer);
console.log(slicedBuffer.toString('hex'));
