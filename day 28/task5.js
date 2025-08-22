const buffer1 = Buffer.from([10, 20]);
const buffer2 = Buffer.from([30, 40, 50]);

const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);

console.log(concatenatedBuffer);
console.log(concatenatedBuffer.toString('hex'));
