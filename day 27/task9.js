const fs = require("fs");

const readableStream = fs.createReadStream("task9_input.txt");
const writableStream = fs.createWriteStream("task9_output.txt");

readableStream.on("data", (chunk) => {
    const canWrite = writableStream.write(chunk);

    if (!canWrite) {
        readableStream.pause();

        writableStream.once("drain", () => {
            readableStream.resume();
        });
    }
});

readableStream.on("end", () => {
    writableStream.end();
    console.log("Finished writing with backpressure handling");
});

readableStream.on("error", (err) => {
    console.error("Readable Stream Error:", err.message);
});

writableStream.on("error", (err) => {
    console.error("Writable Stream Error:", err.message);
});
