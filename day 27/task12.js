const fs = require("fs");
const zlib = require("zlib");

const readableStream = fs.createReadStream("task10_input.txt");
const writableStream = fs.createWriteStream("task12_input.txt.gz");

const gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writableStream);

writableStream.on("finish", () => {
    console.log("File successfully compressed to task12_input.txt.gz");
});
