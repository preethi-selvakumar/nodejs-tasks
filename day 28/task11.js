function isValidUTF8(buffer) {
    try {
        const str = buffer.toString('utf8');
        const reconverted = Buffer.from(str, 'utf8');
        return buffer.equals(reconverted);
    }
    catch (e) {
        return false;
    }
}

const validBuffer = Buffer.from('Hello');
const invalidBuffer = Buffer.from([0xff, 0xfe]);

console.log(isValidUTF8(validBuffer));
console.log(isValidUTF8(invalidBuffer)); 
