const myBuffer = Buffer.alloc(20);

const myString = "Hello";

myBuffer.write(myString, 5, 'utf-8');

console.log(myBuffer);
