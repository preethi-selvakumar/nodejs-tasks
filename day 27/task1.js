const fs = require("fs");

const readableStream = fs.createReadStream("task1.txt", "utf-8");

readableStream.on("data", (chunk) => {
    console.log("Data received:", chunk);
});

readableStream.on("error", (err) => {
    console.error("Error:", err);
});

readableStream.on("end", () => {
    console.log("Finished reading file");
});
