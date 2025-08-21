const fs = require("fs");
const { Transform } = require("stream");

const readableStream = fs.createReadStream("task7_input.txt", "utf-8");
const writableStream = fs.createWriteStream("task7_output.txt", "utf-8");

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const modifiedData = chunk.toString().toUpperCase();
        callback(null, modifiedData);
    },
});

readableStream.pipe(transformStream).pipe(writableStream);

writableStream.on("finish", () => {
    console.log("Finished transforming data and writing to output file");
});
