const fs = require("fs");

const readableStream = fs.createReadStream("task4_input.txt", "utf-8");
const writableStream = fs.createWriteStream("task4_output.txt", "utf-8");

readableStream.on("error", (err) => {
    console.error("Readable Stream Error:", err.message);
});

writableStream.on("error", (err) => {
    console.error("Writable Stream Error:", err.message);
});

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
    console.log("Data successfully written to output file");
});
