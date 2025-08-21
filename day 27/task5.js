const fs = require("fs");

const readableStream = fs.createReadStream("task5_input.txt");

let totalBytes = 0;

readableStream.on("data", (chunk) => {
    totalBytes += chunk.length;
});

readableStream.on("end", () => {
    console.log("Finished reading file");
    console.log("Total bytes read:", totalBytes);
});

readableStream.on("error", (err) => {
    console.error("Error:", err.message);
});
