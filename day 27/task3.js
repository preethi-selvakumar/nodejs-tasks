const fs = require("fs");

const readableStream = fs.createReadStream("task3_input.txt", "utf-8");
const writableStream = fs.createWriteStream("task3_output.txt", "utf-8");

readableStream.pipe(writableStream);

readableStream.on("end", () => {
    console.log("Finished piping data from input to output file");
});
