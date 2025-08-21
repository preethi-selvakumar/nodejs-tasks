const fs = require("fs");

const writableStream = fs.createWriteStream("task6_output.txt", "utf-8");

console.log("Type something (press Ctrl+C to stop):");

process.stdin.pipe(writableStream);

writableStream.on("finish", () => {
    console.log("All input saved to task6_output.txt");
});
