const fs = require("fs");

const readableStream = fs.createReadStream("task10_input.txt", "utf-8");

readableStream.on("data", (chunk) => {
    console.log("Data received:", chunk);
});

readableStream.on("end", () => {
    console.log("Finished reading file");
});

readableStream.on("error", (err) => {
    console.error("Error:", err.message);
});
