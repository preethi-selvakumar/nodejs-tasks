const fs = require("fs");

const writableStream = fs.createWriteStream("task2.txt", "utf-8");

writableStream.write("This is Preethi.\n");
writableStream.write("I am learning writable streams in Node.js.");

writableStream.end(() => {
    console.log("Finished writing to file");
});
