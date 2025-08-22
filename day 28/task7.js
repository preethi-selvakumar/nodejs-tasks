const base64String = 'SGVsbG8gd29ybGQ=';

const buffer = Buffer.from(base64String, 'base64');

console.log(buffer);
